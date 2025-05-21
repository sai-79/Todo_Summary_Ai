const axios = require("axios");

const sendToSlack = async (message) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  await axios.post(webhookUrl, {
    text: message,
  });
};

module.exports = { sendToSlack };
