import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main/Main.js";
import Settings from "./Settings/Settings.js";
import MessageLogs from "./MessageLogs/MessageLogs.js";

const Components = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Main/>} /> {/* home */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/logs" element={<MessageLogs />} />
      </Routes>
    </Router>
  );
};

export default Components;
