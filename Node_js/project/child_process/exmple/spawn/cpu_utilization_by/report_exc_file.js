const { spawn } = require('child_process');
const path = require('path');

// Start the server.js process
const serverProcess = spawn('node', [path.resolve(__dirname, 'report_exc_file.js')]);

serverProcess.stdout.on('data', (data) => {
  console.log(`Server stdout: ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  console.error(`Server stderr: ${data}`);
});

// Monitor the CPU utilization of the server.js process
setInterval(() => {
  const ps = spawn('ps', ['-p', serverProcess.pid, '-o', '%cpu']);

  ps.stdout.on('data', (data) => {
    const cpuUsage = data.toString().split('\n')[1].trim();
    console.log(`CPU Usage: ${cpuUsage}%`);
  });

  ps.stderr.on('data', (data) => {
    console.error(`ps stderr: ${data}`);
  });

  ps.on('close', (code) => {
    if (code !== 0) {
      console.error(`ps process exited with code ${code}`);
    }
  });
}, 1000); // Check CPU usage every second

serverProcess.on('close', (code) => {
  console.log(`server.js process exited with code ${code}`);
});
