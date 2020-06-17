// Accepts a number and adds up all the numbers from 0 to the number passed

function recursiveRange(num) {
  if (num < 0) {
    console.log("Invalid input!!!!");
    return;
  }
  if (num == 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(5)); // 15
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(-2)); // Invalid Input
