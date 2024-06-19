// import { error } from "console";

setTimeout(() => console.log(4));  // 5

Promise.resolve().then(() => console.log(2));   //3


Promise.resolve().then(() => console.log(3)); //4
Promise.resolve().then(() => setTimeout(() => console.log(6))); //8  
process.nextTick(()=>console.log("2.3"))   //2
setTimeout(() => console.log(5));  //6
Promise.resolve().then(() => setTimeout(() => console.log(9))); //8  
setImmediate(() => console.log(7)); //7

// Promise.resolve().then(() => setTimeout(() => console.log(11))); //8  
process.nextTick(()=>console.log("3.3"))   //2

// Promise.resolve().then(() => setTimeout(() => console.log(10))); //8  

console.log(1);       //1

// console.log(error.stack)

//next.tic 2.3,3.3

// promis  2, (timer-6),3, timer-9

//timer  4,5, second cycle loop  6,9

// io/callback

// signle 7



//

1
2.2
3.3
2
3
4
5
7  ///
6
9







// callback  4,,5 7,6 
//macrotask que: 3.3,2,3
// #    1,3.3, 2,3,4,5,7,6 
/*
//output
1
3.3
2
3
4
5
7
6

*/