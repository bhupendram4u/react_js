
// ############################------- Short-circuit evaluation with logical AND (&&):

let condition=true
doSomething=()=>console.log("Done")

// Long version
if (condition) {
    doSomething();
}
// Short version
condition && doSomething();



// ####################################------------------------------
// Short-circuit evaluation with logical OR (||):

// Long version
if (!value) {
    value = defaultValue;
}
// Short version
value = value || defaultValue;

//#############################------------------------------------------------
// Ternary operator (? :):




//-----------------------------------------------------
// Nullish coalescing operator (??):
// Long version
const finalValue1 = (value !== null && value !== undefined) ? value : defaultValue;
// Short version
const finalValue2= value ?? defaultValue;

//##################-------------------------
// Ternary operator (? :):

// Long version
const result = condition ? "True" : "False";
// Short version
const result = condition && "True" || "False";

