const http = require('http');
const { fork } = require('child_process');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`'Request received ${req.url}`);
  if (req.url === '/generate-report') {
    // Fork a child process to generate the report
    const child = fork(path.resolve(__dirname, 'fork.js'));

    // Send request to child process
    child.send({ task: 'generateReport' });

    // Listen for messages from the child process
    child.on('message', (report) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(report));
      child.kill();
    });

    child.on('error', (error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });

    child.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Child process exited with code ${code}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
