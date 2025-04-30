// Freeze
const cl=console.log;
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
obj.b = 4;

// cl(obj);  // {a:1}

//Object.seal()
const objseal = { name: 'Eve' };
Object.seal(objseal);
objseal.name = 'Anna';
objseal.new_name = 'Bhupendra';
delete objseal.name;
console.log(objseal); // { name: 'Anna' }


const newob={"props":"prop_val","obj":{"child_prop":"child_value"}}



cl((newob?.obj?.child_prop==='child_value')?true:false);
