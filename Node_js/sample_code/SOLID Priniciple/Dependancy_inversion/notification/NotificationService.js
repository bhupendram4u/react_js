// NotificationService.js

class NotificationService {
  constructor(messageSender) {
    this.messageSender = messageSender;
  }

  sendNotification(message) {
    this.messageSender.sendMessage(message);
  }
}

module.exports = NotificationService;
