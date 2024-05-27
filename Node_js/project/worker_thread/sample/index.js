const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

worker.on('message', (message) => {
    console.log('Message from worker:', message);
});

worker.postMessage('Start working');