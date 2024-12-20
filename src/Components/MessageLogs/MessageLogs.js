import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import { getAllMessageLogs } from "../../Services/MessageLogsService";
import Parse from "parse";

const MessageLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user = Parse.User.current();

  useEffect(() => {
    const fetchMessageLogs = async () => {
      try {
        setLoading(true);
        const messageLogs = await getAllMessageLogs();
        setLogs(messageLogs);
      } catch (err) {
        console.error("Error fetching message logs:", err);
        setError("Failed to fetch message logs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchMessageLogs();
    }
  }, [user]);

  return (
    <div className="container">
      <h2>Message Logs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && logs.length > 0 ? (
        <MessageList logs={logs} />
      ) : (
        !loading && <p>No message logs available.</p>
      )}
    </div>
  );
};

export default MessageLogs;
