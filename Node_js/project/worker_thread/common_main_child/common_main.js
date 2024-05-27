const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    // Main thread
    console.log('Main thread started.');

    const numThreads = 3;
    const tasks = ['task1', 'task2', 'task3']; // Example tasks

    // Create an array to store worker instances
    const workers = [];

    // Create worker threads
    for (let i = 0; i < numThreads; i++) {
        const worker = new Worker(__filename);
        
        // Listen for messages from worker threads
        worker.on('message', (message) => {
            console.log(`Received message from worker ${i + 1}:`, message);
        });

        // Store the worker instance in the array
        workers.push(worker);

        // Send a task to each worker thread
        worker.postMessage(tasks[i]);
    }

    // Handle termination of worker threads
    workers.forEach((worker, index) => {
        worker.on('exit', (code) => {
            console.log(`Worker ${index + 1} exited with code ${code}.`);
        });
    });
} else {
    // Worker thread
    console.log('Worker thread started.');

    // Listen for messages from the main thread
    parentPort.on('message', (task) => {
        console.log('Received task:', task);

        // Simulate some processing time
        setTimeout(() => {
            // Send the result back to the main thread
            parentPort.postMessage(`Result for ${task}`);
        }, Math.random() * 2000); // Random delay to simulate processing time
    });
}
