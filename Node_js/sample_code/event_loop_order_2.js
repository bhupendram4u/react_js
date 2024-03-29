setTimeout(() => console.log(4));

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(6)));  

Promise.resolve().then(() => console.log(3));

setTimeout(() => console.log(5));
setImmediate(() => console.log(7));
process.nextTick(()=>console.log("3.3"))
console.log(1); 