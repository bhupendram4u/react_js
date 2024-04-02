
const test = {
    a: 123,
    b: 456,
    };
    
    function tester (a, b) {
        return `a: ${this.a} and b: ${this.b} |other a: ${a} and b: ${b}`;
    }
    // bind
    
    const bindExecutor = tester.bind(test,  80, 90);
     console.log(bindExecutor());
    // call
    console.log(tester.call(test, 80, 90));
    // apply
    console.log(tester.apply(test,  [80, 90]));