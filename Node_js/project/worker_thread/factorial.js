const { isMainThread, parentPort, Worker, workerData } = require('worker_threads');

function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


if (isMainThread) { // If main thread, then create a worker thread for each task.
    const timeoutDuration = 1000
    const task = [6, 13, 17 ,22]
    const workers = []
    for (let i = 0; i < task.length; i++) {
        const worker = new Worker(__filename, {
            workerData: { metaData: task[i] }
        })

        worker.postMessage(task[i])
        worker.on('message', (message) => {
            console.log(` Message Received from worker Thread ${message}`)
            clearTimeout(timeoutId)
        })
        worker.on('error', (error) => {
            console.error(error)
        })
        worker.on('exit', (code) => {
            console.log(`Worker exited with code ${code}`)
        })

        const timeoutId = setTimeout(() => {
            console.log(`#parent Timeout reached for worker ${i + 1}. Terminating.`);
            worker.terminate();
        }, timeoutDuration)
        workers.push(worker)
    }

    workers.forEach((worker, index) => {
        worker.on('exit', (code) => {
            console.log(`Worker ${index + 1} exited with code ${code}.`);
            if (code !== 0) {
                console.error(`Worker ${index + 1} terminated with non-zero exit code.`)
            }
        })
    })

} else {
    // Worker thread
    const { metaData } = workerData
    console.log('Worker thread started.', metaData);
    parentPort.on('message', (number) => {
        console.log('Received task:', number)
        const result = factorial(number)
        parentPort.postMessage(result)
    })

}




