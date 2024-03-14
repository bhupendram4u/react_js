// FileLogger.js

const LoggerInterface = require('./LoggerInterface');

class FileLogger extends LoggerInterface {
  log(message) {
    // Logic to log message to a file
    console.log(`[File] ${message}`);
  }
}

module.exports = FileLogger;
