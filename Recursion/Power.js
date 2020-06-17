// Implementation of Math.pow() for positive integers

function power(base, exp) {
  if (exp == 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(3, 3)); // 27
console.log(power(3, 0)); // 1
