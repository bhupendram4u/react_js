

const test = {
    a: 123,
    b: 456,
    };
    
    function tester (a, b) {
        return `a: ${this.a} and b: ${this.b} |other a: ${a} and b: ${b}`;
    }
    // bind


Function.prototype.myBind = function (scope, ...args) {
    scope._this = this;
    return function () {
        return scope._this(...args);
    };
};
Function.prototype.myCall = function (scope, ... args) {
    scope. this = this;
    return scope._this(... args);
};
  
Function.prototype.myapply = function (scope, args) {
        scope. this = this;
        return scope._this(...args);
    };
// bind
const bindExecutor = tester.myBind (test,   80, 90);
console.log(bindExecutor());
// call
console.log(tester.myCall(test, 80, 90));
// apply
console.log(tester.myapply(test,  [80, 90]));


