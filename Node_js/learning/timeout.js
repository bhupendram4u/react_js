const log=console.log

function test(){
	console.log(a);
	//console.log(b);
	var a=20
	let b=10;
	console.log(a);

     
}
test();
log("\n Arthimetic Opertion Started ###")
log(`"3"+1 =>`,"3"+1)
log(`"3"-1 =>`,"3"-1)
log(`3-"1" =>`,3-"1")
log(`3+"1" =>`,3+"1")


log(`"3"*1 =>`,"3"*1)
log(`"3"/1 =>`,"3"/1)
log(`3*"1" =>`,3*"1")
log(`3/"1" =>`,3/"1")


log("\n \n -------------------")
setTimeout(()=>log("Timeout "),0)

setImmediate(()=>log("ImmidateCalled"))


process.nextTick(()=>log("next Tick"))

// log("Console statement at Last");

// log("Console Text fuin:'");

