process.on("uncaughtException", (err) => {
    console.log("error Name", err.name)
    console.log("error Message", err.message)
    console.log("error Message", err.stack)
    process.exit(1);
})

const port = 3030
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();// Allow Cross-Origin requests



app.use(cors());

// Set security HTTP headers
app.use(helmet());
/*
// Limit request from the same API 
const limiter = rateLimit({
    max: process.env.RATE_LIMIT_REQUESTS,
    windowMs: process.env.RATE_LIMIT_TIME,
    message: 'Too Many Request from this IP, please try again in an hour'
});



app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('trust proxy', 1)

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '2mb'
}));

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());


app.get('/test1', (request, response) => response.status(200).json({ "ipaddress": request.ip }));


 
app.get('/ip', (request, response,next) => {
    console.log('request.ip', request.ip);
    //    response.status(200).json({"ipaddress": request.ip});
    response.send('Admin Homepage')

    // setTimeout(
    //     ()=> res.send('Admin Homepage'),200
    //   )
})

*/
app.get('/test',(req,res,next)=>{
    console.log(`req.headers`,req.headers)
    res.send('Admin Homepage test')
 
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});



















process.on("unhandledRejection", err => {
    console.log("error Name".err.name)
    console.log("error Message".err.message)
    process.exit(1);
})