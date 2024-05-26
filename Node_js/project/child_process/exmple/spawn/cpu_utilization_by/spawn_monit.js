const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

// Start the server.js process
const serverProcess = spawn('node', [path.resolve(__dirname, 'report_exc_file.js')]);

serverProcess.stdout.on('data', (data) => {
  console.log(`Server stdout: ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  console.error(`Server stderr: ${data}`);
});

// Variable to keep track of the number of iterations
let iterationCount = 0;

// Determine the correct ps command options based on the operating system
const psOptions = os.platform() === 'linux' ? ['-p', serverProcess.pid, '-o', '%cpu'] : ['-p', serverProcess.pid];

console.log(`Monitoring CPU usage of process ${serverProcess.pid}`);

// Monitor the CPU utilization of the server.js process
const interval = setInterval(() => {
  const ps = spawn('ps', psOptions);

  ps.stdout.on('data', (data) => {
    const cpuUsage = data.toString().trim().split('\n')[1].trim(); // Extracting the CPU usage value
    console.log(`CPU Usage: ${cpuUsage}`);
  });

  ps.stderr.on('data', (data) => {
    console.error(`ps stderr: ${data}`);
  });

  ps.on('close', (code) => {
    if (code !== 0) {
      console.error(`ps process exited with code ${code}`);
    }
  });

  // Increment the iteration count and stop after 5 iterations
  iterationCount++;
  if (iterationCount >= 5) {
    clearInterval(interval);
    serverProcess.kill(); // Optionally kill the server process
  }
}, 1000); // Check CPU usage every second

serverProcess.on('close', (code) => {
  console.log(`server.js process exited with code ${code}`);
});
