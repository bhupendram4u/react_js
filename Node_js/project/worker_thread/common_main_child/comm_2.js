const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // Main thread
    console.log('Main thread started.');

    const numThreads = 3;
    const tasks = ['task1', 'task2', 'task3']; // Example tasks
    const timeoutDuration = 100; // Timeout duration in milliseconds

    // Create an array to store worker instances
    const workers = [];

    // Create worker threads
    for (let i = 0; i < numThreads; i++) {
        const worker = new Worker(__filename, {
            workerData: { timeoutDuration } // Pass timeout duration to worker thread
        });

        // Listen for messages from worker threads
        worker.on('message', (message) => {
            console.log(`Received message from worker ${i + 1}:`, message);
            clearTimeout(timeoutId); // Clear timeout when task is completed
        });

        // Store the worker instance in the array
        workers.push(worker);

        // Send a task to each worker thread
        worker.postMessage(tasks[i]);

        // Set timeout for worker thread
        const timeoutId = setTimeout(() => {
            console.log(`#prent Timeout reached for worker ${i + 1}. Terminating.`);
            worker.terminate();
        }, timeoutDuration);
    }

    // Handle termination of worker threads
    workers.forEach((worker, index) => {
        worker.on('exit', (code) => {
            console.log(`Worker ${index + 1} exited with code ${code}.`);
            if (code !== 0) {
                console.error(`Worker ${index + 1} terminated with non-zero exit code.`);
            }
        });
    });
} else {
    // Worker thread
    console.log('Worker thread started.');

    // Store the timeout ID
    let timeoutId;

    // Extract timeout duration from worker data
    const { timeoutDuration } = workerData;

    // Listen for messages from the main thread
    parentPort.on('message', (task) => {
        console.log('Received task:', task);

        // Clear the previous timeout
        clearTimeout(timeoutId);

        // Simulate some processing time
        setTimeout(() => {
            // Send the result back to the main thread
            parentPort.postMessage(`Result for ${task}`);
        }, Math.random() * 2000); // Random delay to simulate processing time

        // Set a new timeout for termination
        // timeoutId = setTimeout(() => {
        //     console.log('# Worker Timeout reached. Terminating worker thread.');
        //     process.exit(0);
        // }, timeoutDuration);
    });
}
