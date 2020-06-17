// Returns the factorial of a given number.

function factorial(num) {
  if (num < 0) {
    console.log("Invalid Input");
    return;
  }
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
