import Parse from "parse";

// CREATE operation - new settings with provided fields
export const createSettings = (settingsData) => {
  console.log("Creating settings: ", settingsData);
  const Settings = Parse.Object.extend("Settings");
  const settings = new Settings();

  // Using setters to update the settings object
  settings.set("days", settingsData.days);
  settings.set("checkinMethod", settingsData.checkinMethod);
  settings.set("checkinTime", settingsData.checkinTime);
  settings.set("timezone", settingsData.timezone);

  return settings.save().then((result) => {
    //new settings object
    return result;
  });
};

// READ operation - get settings by ID
export const getSettingsById = (id) => {
  const Settings = Parse.Object.extend("Settings");
  const query = new Parse.Query(Settings);
  return query.get(id).then((result) => {
    // Return settings object with objectId: id
    return result;
  });
};

// READ operation - get all settings
export const getAllSettings = () => {
  const Settings = Parse.Object.extend("Settings");
  const query = new Parse.Query(Settings);
  return query.find().then((results) => {
    //array of settings objects
    return results;
  });
};

// DELETE operation - remove settings by ID
export const removeSettings = (id) => {
  const Settings = Parse.Object.extend("Settings");
  const query = new Parse.Query(Settings);
  return query.get(id).then((settings) => {
    return settings.destroy();
  });
};
