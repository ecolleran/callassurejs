import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//routes stateful container
import Main from "./Main/Main.js";
//unprotected "unauthorized"
//import MainHome from "./Main/MainHome";
//protected "authorized route"
import MainGood from "./Main/MainGood";

import Auth from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes.js";
import Settings from "./Settings/Settings.js";

const Components = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<MainHome />} /> */}
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/user" element={<MainGood />} /> */}
        <Route
          path="/"
          element={
            <ProtectedRoute
              path="/user/:firstName/:lastName"
              element={MainGood}
            />
          }
        />
        <Route
          path="/settings"
          element={<ProtectedRoute element={Settings} />}
        />
        {/* <Route path="/user/:firstName/:lastName" element={<MainGood />} /> */}
        {/* <Route path="/user" element={<ProtectedRoute element={MainGood} />} /> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        {/* a saftey net and catch all in case a random route is sent to*/}
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
