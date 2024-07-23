setTimeout(() => console.log(4));

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(6)));  

Promise.resolve().then(() => console.log(3));

setTimeout(() => console.log(5));

console.log(1); 



// pro q 2, timer-6, 3   

// Timer 4 5


// o/p
// 1 2 3 4 5 6
