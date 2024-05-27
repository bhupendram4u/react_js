const { Worker } = require('worker_threads');
const os = require('os');

// Number of CPU cores
const numCPUs = 1 //os.cpus().length;

// Number of worker threads to create (e.g., double the number of CPU cores)
const numWorkers = numCPUs * 2; // Intentionally overloading

let completedWorkers = 0;
const results = [];

console.log(`Creating ${numWorkers} worker threads...`);

for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker('./worker.js');

    worker.on('message', (message) => {
        results.push(message);
        completedWorkers++;
        if (completedWorkers === numWorkers) {
            console.log('All workers completed.');
            console.log('Results:', results);
        }
    });

    worker.on('error', (error) => {
        console.error(`Worker ${i} error:`, error);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker ${i} exited with code ${code}`);
        }
    });

    worker.postMessage('start');
}