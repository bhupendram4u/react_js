// EmailSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class EmailSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending email: ${message}`);
  }
}

module.exports = EmailSender;
