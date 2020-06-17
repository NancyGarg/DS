// Gives the product of all the elements of an array

function productOfArray(arr) {
  if (arr.length == 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([2, 3, 5, 2])); // 60
console.log(productOfArray([])); // 1
