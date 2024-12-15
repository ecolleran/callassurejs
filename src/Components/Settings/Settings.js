import React, { useState, useEffect } from "react";
import Parse from "parse";

const Settings = () => {
  const [checkinSettings, setCheckinSettings] = useState([]);
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
        const response = await fetch(`https://smart-goat-modern.ngrok-free.app/get-settings?user_email=${user_email}`, {
          headers: {
            'ngrok-skip-browser-warning': '1', //bypasses the ngrok warning
          }
        });        

        //log the response text for debug
        const text = await response.text();
        console.log('Response Text:', text);
        
        if (!response.ok) {
          console.error('Error response:', response);
          throw new Error(`Failed with status ${response.status}`);
        }
    
        try {
          const data = JSON.parse(text);
          console.log('User settings fetched:', data);
    
          if (data.checkin_settings) {
            setCheckinSettings(data.checkin_settings);
          }
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
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

      {/* Table to display check-in settings */}
      {checkinSettings.length > 0 && (
        <div className="settings-table">
          <h3>Your Current Check-In Settings</h3>
          <table>
            <thead>
              <tr>
                <th>Day of Week</th>
                <th>Method</th>
                <th>Time Zone</th>
                <th>UTC Deadline</th>
              </tr>
            </thead>
            <tbody>
              {checkinSettings.map((setting, index) => (
                <tr key={index}>
                  <td>
                    {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
                      setting.dayofweek - 1
                    ]}
                  </td>
                  <td>{["Phone Call", "Text Message", "App", "Email"][setting.method_id - 1]}</td>
                  <td>{setting.timezone}</td>
                  <td>
                    {new Date(setting.utc_deadline * 1000)
                      .toISOString()
                      .substr(11, 8)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h2>Here you can add or remove check-in times:</h2>
        <div>
          <select value={action} onChange={(e) => setAction(e.target.value)}>
            <option value="add">Add Check-in</option>
            <option value="remove">Remove Check-in</option>
          </select>
        </div>

        <h2>Select Days of the Week:</h2>
        <div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (day, index) => (
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
            )
          )}
        </div>

        <h2>Select Check-in Method:</h2>
        <div>
          {["Phone Call", "Text Message", "App", "Email"].map((method, index) => (
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
          ))}
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
