// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  process.on('message', (message) => {
    const { number } = message;
    const result = factorial(number);
    process.send({"number":number,"result":result});
  });
  