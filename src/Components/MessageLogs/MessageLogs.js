import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import Parse from "parse";

const MessageLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user = Parse.User.current();

  useEffect(() => {
    const fetchMessageLogs = async () => {
      try {
        const user_email = user?.get("email");
        const response = await fetch(`https://smart-goat-modern.ngrok-free.app/get-message-logs?user_email=${user_email}`, {
            headers: {
              'ngrok-skip-browser-warning': '1', //bypasses the ngrok warning
            }
          });

        if (!response.ok) {
          throw new Error(`Error fetching logs: ${response.statusText}`);
        }
        
        const data = await response.json();
        setLogs(data.message_logs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessageLogs();
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
