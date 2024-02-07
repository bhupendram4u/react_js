process.on("uncaughtException",(err)=>{
    console.log("error Name",err.name)
    console.log("error Message",err.message)
    console.log("error Message",err.stack)
    process.exit(1);
})
 
console.log(`#Current directory: ${process.cwd()}`);



var http = require('http');
http.createServer(function(req,res){
console.log("Request Recevied ")

res.write("Hello World");
res.end();
}).listen(3000,()=>console.log("Port is listneing"))



process.on("unhandledRejection",err=>{
    console.log("error Name".err.name)
    console.log("error Message".err.message)
    process.exit(1);
})


process.on('warning', (warning) => {
    console.warn(warning.name);    // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack);   // Print the stack trace
  });