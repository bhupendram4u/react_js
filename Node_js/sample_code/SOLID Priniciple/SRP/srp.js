class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class UserRepository {
    saveToDatabase(user) {
      // Logic to save user data to the database
      console.log(`Saving user ${user.name} to the database...`);
    }
  }
  
  class EmailService {
    sendWelcomeEmail(user) {
      // Logic to send a welcome email to the user
      console.log(`Sending welcome email to ${user.email}...`);
    }
  }
  
  const user = new User('Alice', 'alice@example.com');
  const userRepository = new UserRepository();
  const emailService = new EmailService();
  
  userRepository.saveToDatabase(user);
  emailService.sendWelcomeEmail(user);
  


  /*
XXXXXXXXXXXXXXXXXXXXXXXXXX
DOnt Use this
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Logic to save user data to the database
    console.log(`Saving user ${this.name} to the database...`);
  }

  sendWelcomeEmail() {
    // Logic to send a welcome email to the user
    console.log(`Sending welcome email to ${this.email}...`);
  }
}

const user = new User('Alice', 'alice@example.com');
user.saveToDatabase();
user.sendWelcomeEmail();


  */