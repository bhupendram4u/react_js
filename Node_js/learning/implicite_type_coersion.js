// Link https://www.youtube.com/watch?v=GKJh3vdat8A

const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error")
const successMsg = document.querySelector(".success")
form.addEventListener("submit", e => {
    e.preventDefault()
    const numberofchildren = parseInt(input.value)
    errorMsg.textContent = ""
    successMsg.textContent = ""


    //    if (!"") {   # it also return true 
    // if(isNaN(numberofchildren)) // It is valid condition 

    if (!numberofchildren) {  // Error when user Enter 0   . And for 0 It accept 
        errorMsg.textContent = "Please enter number of children"
    } else {
        successMsg.textContent = "Success"
    }
})





// type casting and coercing in JavaScript
//
// String(), +, Number(), +, -, Boolean(), !, !!
// toString(), valueOf()
// parseInt(), parseFloat()
// unary plus, logical NOT, addition operator, comparison operators
let log = console.log;
let n = '56';
//log(-n, +n);
//                              String,         Number,       Boolean
let obj = { a: 1, b: 2 }; // '[object Object]'    NaN           true
let emptyObj = {}; //       '[object Object]'     NaN             true
let arr = [1, 2, 3]; //     '1,2,3'              NaN              true // [1] to Number would become 1
                                                                  // If there is only one number in the array then 
                                                                  // that becomes the numeric conversion.
let emptyArr = []; //       ''                   0              true
let str = 'hello'; //       'hello'             NaN             true
let emptyStr = ''; //         ''                 NaN           false   ('43'=>43, '0'=>0)
let num = 1; //               '1'               1              true
let zero = 0; //            '0'                 0               false
let T = true; //            'true'              1               true
let F = false; //            'false'             0               false
//  null    //               'null'              0              false
//  undefined   //      'undefined'             NaN            false
//  NaN       //             'NaN'             NaN             false

/**
 * Plus vs Concatenation
 * exp1 + exp2
 * if either exp1 or exp2 is a string then treat the '+' as a concatenation
 *  coerce both values to Strings as needed
 *
 * if neither exp1 or exp2 is a string then treat the '+' as an addition operation
 *  coerce both values to Numbers as needed
 *
 */

//log(F + num);
//"234234".toLowerCase()
// Falsey values - false, 0, '', null, undefined, NaN
// Truthy values - Everything else....
// Boolean() != new Boolean(), String() != new String(), Number() != new Number()
// Boxing of Primitives
// Boolean() == !!  (! will flip truthiness too)
// Number() == +  (- will flip sign too)
// String() == .toString() unless null was set as the prototype of the Object

//log(Boolean(234), Boolean(0), new Boolean(0));
//log(true && Boolean(new Boolean(0)));

// && compares the two operands and then actually returns
// the second if the first is truthy

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

log(!arr < +T || !!arr > +emptyArr);
//unary plus 17, logical NOT 17, less than 12, greater than 12, logical OR 6
// (false < 1 || true > 0)
// ( 0 < 1 || 1 > 0 )
// ( true || )
// true

log(1 + -+(+(+-+1))); //2