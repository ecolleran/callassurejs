import React from "react";
import { Link } from "react-router-dom";
import Parse from "parse";

const MainGood = () => {
  var user = Parse.User.current();

  return (
    <div class="center">
      <h1>Welcome, {user?.get("firstName")}!</h1>
      <button>
        <Link to="/settings">Update your Settings here</Link>
      </button>
      <br />
      <button>
        <Link to="https://smart-goat-modern.ngrok-free.app/message-status">See Message Logs</Link>
      </button>
    </div>
  );
};

export default MainGood;