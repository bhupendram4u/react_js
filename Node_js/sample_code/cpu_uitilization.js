console.time('factorial');
const result = factorial(3);
console.timeEnd('factorial');
console.log(result);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}