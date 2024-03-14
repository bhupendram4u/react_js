// SMSSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class SMSSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

module.exports = SMSSender;
