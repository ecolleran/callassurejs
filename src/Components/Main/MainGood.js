import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Parse from "parse";

const MainGood = () => {
  var user = Parse.User.current();

  return (
    <div>
      <h1>
        {" "}
        Welcome: {user?.get("firstName")}{" "}
      </h1>
      <button>
        <Link to="/settings">Update Your Check-In's Here</Link>
      </button>
    </div>
  );
};

export default MainGood;