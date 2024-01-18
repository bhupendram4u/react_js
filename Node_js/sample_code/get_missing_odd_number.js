let arr=[9,3,7,11,5,13,19,47,35]
let missing_odd=[]
let init=Math.min(...arr);
let max=Math.max(...arr);
let brk=true;

  while(brk){
     init++;
     // check next  number is odd or not 
     if(init %2!=0){
            //check odd number exist in arry else push in missing odd 
      if(!arr.includes(init))  missing_odd.push(init)
          // if lengh then stop 
      if(init >=max)   brk=false; 
      
     }
     
  }
console.log(`missing Odd Number : [${missing_odd}]`);