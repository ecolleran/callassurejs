import React, { useState, useEffect } from "react";
import Parse from "parse";

const Settings = () => {
  const [days, setDays] = useState([]);
  const [checkinMethod, setCheckinMethod] = useState([]);
  const [checkinTime, setCheckinTime] = useState("");
  const [timezone, setTimezone] = useState("");
  var user = Parse.User.current();

  // Set timezone on component load
  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!timezone) {
      alert("Timezone is not set.");
      return;
    }

    // Construct the payload
    const payload = {
      action: "add",
      user: user?.get("firstName"),
      checkin: checkinTime,
      days: days,
      checkin_method: checkinMethod,
      timezone: timezone,
    };

    try {
      // Call the Parse Cloud Function
      const response = await Parse.Cloud.run("sendWebhook", payload);
      console.log("Webhook Response:", response);
      alert("Check-in added successfully!");
    } catch (error) {
      console.error("Error calling sendWebhook:", error);
      alert("Failed to add check-in. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Hello, {user?.get("username")}!</h2>
      <h1>Configure your check-ins here</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="button">
          Add Check-In
        </button>
      </form>
    </div>
  );
};

export default Settings;