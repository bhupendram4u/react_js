const arr = [9, 3, 7, 11, 5, 13, 19, 47, 35];
let op = {
    "min": 0, "max": 0, "avg": 0, "sum": 0
}
function inner_reduce(acc, cur, indx) {
    acc.min = (cur < acc.min) ? cur : (acc.min == 0) ? cur : acc.min
    acc.max = (cur > acc.max) ? cur : acc.max;
    acc.sum = acc.sum + cur;
    acc.avg = acc.sum / indx + 1;
    return acc;
}

let everying = arr.reduce(inner_reduce, op)


console.log("##Use of Reduce Methode ##: \n")
console.log(everying)




/*

arr.reduce((acc,cur,index)=>{
acc.min=cr<acc.min ?cr:acc.min==0?cur:acc.min
accsum=acc.sum+cur;
 
},{min:0,max:0,avg:0,sum:0})
*/
