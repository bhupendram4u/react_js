import { error } from "console";

setTimeout(() => console.log(4));  //

Promise.resolve().then(() => console.log(2));   //3

Promise.resolve().then(() => setTimeout(() => console.log(6))); //5  

Promise.resolve().then(() => console.log(3)); //4

setTimeout(() => console.log(5));  //7
setImmediate(() => console.log(7)); //8
process.nextTick(()=>console.log("3.3"))   //2
console.log(1);       //1

console.log(error.stack)