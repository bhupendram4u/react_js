const { fork } = require('child_process');
const path = require('path');

// Function to fork a child process and assign a task
function calculateFactorial(number) {
  return new Promise((resolve, reject) => {
    const child = fork(path.resolve(__dirname, 'fork.js'));

    child.send({ number });

    child.on('message', (result) => {
      resolve(result.result);
      console.log(`Result:${result.number}: ${result.result}\n Killing Child process`);
      child.kill();
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
}

// List of numbers to calculate factorial
const numbers = [10, 15, 20, 25];

// Calculate factorials for all numbers
(async () => {
  try {
    const results = await Promise.all(numbers.map(calculateFactorial));
    console.log('Factorial results:', results);
  } catch (error) {
    console.error('Error:', error);
  }
})();