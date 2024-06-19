

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1");
    },2000)
})

let p2 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2");
    },1000)
})  

let p3 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3");
    },3000)
})
let p4 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 4");
    },4000)
})

Promise.all([p1,p2,p3,p4]).then((data)=>{
    console.log('promise=>',data)
}).catch((err)=>{
    console.log(err)
})


Promise.allSettled([p1,p2,p3,p4]).then((data)=>{
    console.log('promise All Settled=>',data)
}).catch((err)=>{
    console.log(err)
})

Promise.race([p1,p2,p3,p4]).then((data)=>{
    console.log('promise race=>',data)
}).catch((err)=>{
    console.log(err)
})
Promise.any([p1,p2,p3,p4]).then((data)=>{
    console.log('promise any=>',data)
}).catch((err)=>{
    console.log(err)
})
