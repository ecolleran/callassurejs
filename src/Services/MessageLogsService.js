import Parse from "parse";

// READ operation - fetch all message logs
export const getAllMessageLogs = () => {
  const MessageLogs = Parse.Object.extend("MessageLogs");
  const query = new Parse.Query(MessageLogs);

  return query.find().then((results) => {
    //map to an array of objects
    return results.map((log) => ({
      id: log.id,
      message_sid: log.get("message_sid"),
      message_status: log.get("message_status"),
      timestamp: log.get("timestamp"),
      to: log.get("to"),
      from: log.get("from"),
      body: log.get("body"),
    }));
  });
};
