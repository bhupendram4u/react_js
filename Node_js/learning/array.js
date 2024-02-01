[] == 0
//true
if ([]) {
   console. log( 'This works!');
}
//This works!
// ------------------
if (0) {
    console. log( 'This works!');
 }

 // does not get output

// ------------------
 1 + '1'
// "11"

//----------
1 + true
// 2



'hello' - 'ello'
// NaN



[] == 0
// true
{} == 0
// Uncaught SyntaxError: Unexpected token



[] +1
// "1"

[] ==
// true

[].toString()
// ""

[1, 2, 3].toString()
// "1,2,3"






{} +1
// Uncaught SyntaxError: Unexpected token
const obj = {};

obj + 1
// "Tobject Object]1"
obj ==0
// false