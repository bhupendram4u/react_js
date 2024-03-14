// main.js

const ConsoleLogger = require('./ConsoleLogger');
const FileLogger = require('./FileLogger');
const RemoteLogger = require('./RemoteLogger');
const LogService = require('./LogService');

// Create instances of different loggers
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();
const remoteLogger = new RemoteLogger();

// Use dependency injection to inject the logger into LogService
const logService = new LogService(consoleLogger);

// Log messages
logService.logMessage('This is a console log message.');

// Change the logger implementation without modifying the client code
logService.logger = fileLogger;
logService.logMessage('This is a file log message.');

// Change the logger implementation again
logService.logger = remoteLogger;
logService.logMessage('This is a remote log message.');
