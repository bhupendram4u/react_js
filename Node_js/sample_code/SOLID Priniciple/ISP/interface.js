// Interface for messaging service
class MessagingService {
    sendMessage(message, recipient) {
      throw new Error('sendMessage method not implemented');
    }
  }
  
  // Interface for receiving messages
  class MessageReceiver {
    receiveMessage() {
      throw new Error('receiveMessage method not implemented');
    }
  }
  
  // Interface for managing contacts
  class ContactManager {
    addContact(contact) {
      throw new Error('addContact method not implemented');
    }
  
    removeContact(contact) {
      throw new Error('removeContact method not implemented');
    }
  }

//   -----------------------------------------------------
  // Concrete class implementing messaging service interface
class TextMessagingService extends MessagingService {
    sendMessage(message, recipient) {
      console.log(`Sending text message "${message}" to ${recipient}`);
    }
  }
  
  // Concrete class implementing message receiver interface
  class EmailReceiver extends MessageReceiver {
    receiveMessage() {
      console.log('Receiving email message...');
    }
  }
  
  // Concrete class implementing contact manager interface
  class ContactListManager extends ContactManager {
    addContact(contact) {
      console.log(`Adding contact: ${contact}`);
    }
  
    removeContact(contact) {
      console.log(`Removing contact: ${contact}`);
    }
  }
  

//   ------------------------------------

// Usage example
const textService = new TextMessagingService();
const emailReceiver = new EmailReceiver();
const contactManager = new ContactListManager();

textService.sendMessage('Hello', 'John');
emailReceiver.receiveMessage();
contactManager.addContact('Alice');
