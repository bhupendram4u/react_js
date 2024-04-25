import express from "express"
import   EventEmitter from 'events';

const eventEmitter =new EventEmitter();
const log=console.log;


const app =express()
const port =3000;
let glb_var=[]






app.get('/test',(req,res,next)=>{
    glb_var.push(function(){ return req.headers})
    const hugArr=new Array(200000).fill(req);
    // log(hugArr)
     req.user={
        id:2,
        name:"hello",
        badkey:req
     }  


    eventEmitter.on('start',()=>log("Evet start emitted."))
    // eventEmitter.removeListener('start')
    // log(req.headers)

    setTimeout(
      ()=> res.send('Admin Homepage'),200
    )
    log("Request received ");
})














app.listen(port,()=>{
    log("Server is Running")
})