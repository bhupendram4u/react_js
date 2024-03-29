setTimeout(() => console.log(2));
 setImmediate(() => console.log(1));
process.nextTick(()=>console.log("Hiilo"))

// console.log("If we used console log then it will change its priority and reverse order print")

 