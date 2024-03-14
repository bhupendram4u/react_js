// LogService.js

class LogService {
    constructor(logger) {
      this.logger = logger;
    }
  
    logMessage(message) {
      this.logger.log(message);
    }
  }
  
  module.exports = LogService;
  