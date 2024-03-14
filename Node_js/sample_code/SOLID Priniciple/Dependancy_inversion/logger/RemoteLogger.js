// RemoteLogger.js

const LoggerInterface = require('./LoggerInterface');

class RemoteLogger extends LoggerInterface {
  log(message) {
    // Logic to log message to a remote server
    console.log(`[Remote] ${message}`);
  }
}

module.exports = RemoteLogger;
