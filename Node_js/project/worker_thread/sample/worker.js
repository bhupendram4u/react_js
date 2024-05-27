const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
    console.log('Message from main thread:', message);

    // Simulate a time-consuming task
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }

    parentPort.postMessage(`Task completed. Sum: ${sum}`);
});