const axios = require('axios');

Parse.Cloud.define("sendWebhook", async (request) => {
    const axios = require("axios");

    //extract data from Parse request
    const action = request.params.action;
    const userId = request.user.id; // Assuming session user data
    const deadline = request.params.checkin;
    const daysOfWeek = request.params.days;
    const methods = request.params.checkin_method;
    const timezoneStr = request.params.timezone;

    
    const payload = {
        action: action,
        user_id: userId,
        checkin: deadline,
        days: daysOfWeek,
        checkin_method: methods,
        timezone: timezoneStr,
    };

    const flaskEndpoint = "http://call-assure.com/update-settings";
    try {
        //POST request
        const response = await axios.post(flaskEndpoint, payload, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.error("Error sending webhook:", error);
        throw new Parse.Error(
            Parse.Error.INTERNAL_SERVER_ERROR,
            "Failed to send webhook"
        );
    }
});

const afterSave = function afterSave(request) {
    const { object: role, context } = request;
    if (context && context.buyers) {
      const purchasedItem = getItemFromRole(role);
      const promises = context.buyers.map(emailBuyer.bind(null, purchasedItem));
      item.increment('orderCount', context.buyers.length);
      promises.push(item.save(null, { useMasterKey: true }));
      Promise.all(promises).catch(request.log.error.bind(request.log));
    }
  };


