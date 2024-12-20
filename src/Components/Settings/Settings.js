import React, { useState, useEffect } from "react";
import { createSettings } from "../../Services/SettingsService";

const Settings = () => {
  const [days, setDays] = useState([]);
  const [checkinMethod, setCheckinMethod] = useState([]);
  const [checkinTime, setCheckinTime] = useState("");
  const [timezone, setTimezone] = useState("");

  //set timezone on entry
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

    //settings object
    const settingsData = {
      days,
      checkinMethod,
      checkinTime,
      timezone,
    };

    try {
      //service to create a new settings object with Parse
      const result = await createSettings(settingsData);
      alert("Settings saved successfully!");
      console.log("New settings object created:", result);
      //clear form
      setDays([]);
      setCheckinMethod([]);
      setCheckinTime("");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Failed to save settings. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Hello, User!</h2>
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