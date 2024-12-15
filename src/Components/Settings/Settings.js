import React, { useState, useEffect } from "react";
import Parse from "parse";

const Settings = () => {
  const [days, setDays] = useState([]);
  const [checkinMethod, setCheckinMethod] = useState([]);
  const [checkinTime, setCheckinTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [action, setAction] = useState("add");
  const [flashMessage, setFlashMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const user = Parse.User.current();

  //timezone for component load
  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);
    
    //fetch existing user settings from Flask API/Databse
    const fetchUserSettings = async () => {
      try {
        const user_email = user?.get("email");
        const response = await fetch(`http://smart-goat-modern.ngrok-free.app/get-settings?user_email=${user_email}`, {
          headers: {
            'ngrok-skip-browser-warning': '1',  // This header bypasses the ngrok warning
          }
        });

        // Log the response text to see what you're getting
        const text = await response.text();  // Get the response as text
        console.log('Response Text:', text);
        
        if (!response.ok) {
          console.error('Error response:', response);
          throw new Error(`Failed with status ${response.status}`);
        }
    
        try {
          const data = JSON.parse(text);  // Attempt to parse the response as JSON
          console.log('User settings fetched:', data);
    
          if (data.checkin_settings) {
            setDays(data.checkin_settings.map(setting => setting.dayofweek));
            setCheckinTime(data.checkin_settings.length > 0 ? data.checkin_settings[0].utc_deadline.split(":").join("") : "00:00");
            setCheckinMethod(data.checkin_settings.map(setting => setting.method_id));
          }
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
          // You could set a state to display an error to the user
        }
      } catch (error) {
        console.error('Error fetching user settings:', error);
      }
    };

    fetchUserSettings();
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const user_email = user?.get("email")
    const payload = {
      action: action,
      user_email: user_email,
      checkin: checkinTime,
      timezone: timezone,
      days: days,
      checkin_method: checkinMethod,
    };

    console.log("Payload being sent:", payload);

    try {
      const response = await Parse.Cloud.run("sendWebhook", payload);
      console.log("Webhook response:", response);

      //success message
      setFlashMessage(`Check-in ${action === "add" ? "added" : "removed"} successfully!`);
    } catch (error) {
      console.error("Error sending webhook:", error);
      setFlashMessage("Failed to update check-in settings. Please try again.");
    } finally {
      setLoading(false);
      //remove message after 3 seconds
      setTimeout(() => {
        setFlashMessage("");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <h2>Hello, {user?.get("firstName")}!</h2>

      {/* Flash message display */}
      {flashMessage && <div className="flash-message">{flashMessage}</div>}

      <form onSubmit={handleSubmit}>
        <h2>Action:</h2>
        <div>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="add">Add Check-in</option>
            <option value="remove">Remove Check-in</option>
          </select>
        </div>

        <h2>Select Days of the Week:</h2>
        <div>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={day}
                value={index + 1}
                checked={days.includes(index + 1)}
                onChange={() => {
                  setDays((prevDays) =>
                    prevDays.includes(index + 1)
                      ? prevDays.filter((d) => d !== index + 1)
                      : [...prevDays, index + 1]
                  );
                }}
              />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
        </div>

        <h2>Select Check-in Method:</h2>
        <div>
          {["Phone Call", "Text Message", "App", "Email"].map(
            (method, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={method.toLowerCase()}
                  value={index + 1}
                  checked={checkinMethod.includes(index + 1)}
                  onChange={() => {
                    setCheckinMethod((prevMethod) =>
                      prevMethod.includes(index + 1)
                        ? prevMethod.filter((m) => m !== index + 1)
                        : [...prevMethod, index + 1]
                    );
                  }}
                />
                <label htmlFor={method.toLowerCase()}>{method}</label>
              </div>
            )
          )}
        </div>

        <h2>Select a Time:</h2>
        <div>
          <label htmlFor="checkin">Check-in Time:</label>
          <input
            type="time"
            id="checkin"
            value={checkinTime}
            onChange={(e) => setCheckinTime(e.target.value)}
          />
        </div>

        <input type="hidden" name="timezone" value={timezone} />
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Updating..." : action === "add" ? "Add Check-In" : "Remove Check-In"}
        </button>
      </form>
    </div>
  );
};

export default Settings;
