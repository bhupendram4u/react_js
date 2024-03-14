let userResponse=  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "address": {
      "street": "789 Pine St",
      "city": "Villagetown",
      "zipcode": "98765",
      "country": "Countryland"
      
    },
    "mother":{
      "mom":{
        "villege":[{
          "state":"prindavan"
        },
        {
          "state":"dhamni"
        }
        ]
      }
    }
  }
  
  let state=["mother","mom","villege","0","state"].reduce((object,path)=>{ return (object||{})[path] },userResponse);
  
  console.log(state);
  console.log(userResponse?.mother?.mom?.villege[0]?.state)

  const log=console.log

  const d={'name':"test",lastname:"mestry"}
  


  d.name="changes"
log(d);


// min : mininumn length of otp & max: maximum length of otp
const getOtp=(min=100000,max=999999)=>Math.floor((Math.random()*max-min)+min)
log(` Your OTP is ${getOtp(1000,9999)}`)