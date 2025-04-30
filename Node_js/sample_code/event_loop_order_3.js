const fs = require('fs')
fs.readFile('file.txt', 'utf8', () => {
    console.log('📘 File read callback');
  });
  
  setTimeout(() => {
    console.log('⏰ setTimeout');
  }, 0);
  
  setImmediate(() => {
    console.log('🚀 setImmediate');
  });

// console.log("If we used console log then it will change its priority and reverse order print")

 