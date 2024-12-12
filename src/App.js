import React from "react";
import Components from "./Components/Components.js";
import Parse from "parse";
import * as ENV from "./environments.js";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

function App() {
  return <Components />;
}

export default App;