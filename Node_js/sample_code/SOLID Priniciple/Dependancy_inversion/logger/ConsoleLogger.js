// ConsoleLogger.js

const LoggerInterface = require('./LoggerInterface');

class ConsoleLogger extends LoggerInterface {
  log(message) {
    console.log(`[Console] ${message}`);
  }
}

module.exports = ConsoleLogger;
