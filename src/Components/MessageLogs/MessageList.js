import React from "react";

const MessageList = ({ logs }) => {
  return (
    <table className="logs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Message SID</th>
          <th>Status</th>
          <th>Timestamp</th>
          <th>To</th>
          <th>From</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id}>
            <td>{log.id}</td>
            <td>{log.message_sid}</td>
            <td>{log.message_status}</td>
            <td>{new Date(log.timestamp).toLocaleString()}</td>
            <td>{log.to}</td>
            <td>{log.from}</td>
            <td>{log.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MessageList;
