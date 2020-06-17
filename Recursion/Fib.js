// Accept sa number and returns the nth number in the  Fibonacci sequence

function fib(num) {
  if (num <= 0) {
    console.log("Invalid  Input!!!!");
    return;
  }
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(0)); // Invalid Input
console.log(fib(4)); // 3
console.log(fib(7)); // 13
console.log(fib(-3)); // Invalid Input
