// main.js

const NotificationService = require('./NotificationService');
const EmailSender = require('./EmailSender');
const SMSSender = require('./SMSSender');
const PushNotificationSender = require('./PushNotificationSender');

// Create instances of different message senders
const smsSender = new SMSSender();
const emailSender = new EmailSender();
const pushNotificationSender = new PushNotificationSender();

// Use dependency injection to inject the message sender into NotificationService
const smsNotificationService = new NotificationService(smsSender);
const emailNotificationService = new NotificationService(emailSender);
const pushNotificationService = new NotificationService(pushNotificationSender);

// Send notifications
smsNotificationService.sendNotification('Hello, this is an SMS notification.');
emailNotificationService.sendNotification('Hello, this is an email notification.');
pushNotificationService.sendNotification('Hello, this is a push notification.');

/*

Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions. In Node.js, this can be achieved by using dependency injection, where dependencies are passed to a module rather than being created or instantiated within it. This allows for more flexible and testable code.



Sure, let's consider another example of the Dependency Inversion Principle (DIP) in a Node.js application. This time, let's create a simple messaging system that sends notifications via different channels, such as email, SMS, or push notifications. We'll use DIP to decouple the messaging system from the specific implementations of each messaging channel.

javascript
Copy code
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
javascript
Copy code
// MessageSenderInterface.js

class MessageSenderInterface {
  sendMessage(message) {
    throw new Error('sendMessage() method must be implemented');
  }
}

module.exports = MessageSenderInterface;
javascript
Copy code
// EmailSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class EmailSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending email: ${message}`);
  }
}

module.exports = EmailSender;
javascript
Copy code
// SMSSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class SMSSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

module.exports = SMSSender;
javascript
Copy code
// PushNotificationSender.js

const MessageSenderInterface = require('./MessageSenderInterface');

class PushNotificationSender extends MessageSenderInterface {
  sendMessage(message) {
    console.log(`Sending push notification: ${message}`);
  }
}

module.exports = PushNotificationSender;
javascript
Copy code
// main.js

const NotificationService = require('./NotificationService');
const EmailSender = require('./EmailSender');
const SMSSender = require('./SMSSender');
const PushNotificationSender = require('./PushNotificationSender');

// Create instances of different message senders
const emailSender = new EmailSender();
const smsSender = new SMSSender();
const pushNotificationSender = new PushNotificationSender();

// Use dependency injection to inject the message sender into NotificationService
const emailNotificationService = new NotificationService(emailSender);
const smsNotificationService = new NotificationService(smsSender);
const pushNotificationService = new NotificationService(pushNotificationSender);

// Send notifications
emailNotificationService.sendNotification('Hello, this is an email notification.');
smsNotificationService.sendNotification('Hello, this is an SMS notification.');
pushNotificationService.sendNotification('Hello, this is a push notification.');
In this example:

NotificationService.js represents a high-level module responsible for sending notifications.
MessageSenderInterface.js defines an interface for message senders.
EmailSender.js, SMSSender.js, and PushNotificationSender.js implement the MessageSenderInterface for different messaging channels.
In main.js, we create instances of different message senders and inject them into the NotificationService, demonstrating how we can easily switch between messaging channels without modifying the NotificationService code.
By following the Dependency Inversion Principle, we've ensured that the NotificationService module is not tightly coupled to specific implementations of message senders, promoting flexibility and ease of maintenance in our messaging system.



*/
