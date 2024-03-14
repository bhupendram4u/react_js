// PushNotificationSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class PushNotificationSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending push notification: ${message}`);
  }
}

module.exports = PushNotificationSender;
