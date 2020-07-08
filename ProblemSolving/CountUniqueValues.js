// Accepts a sorted array and returns the number of unique values in the array

function countUniqueValues(arr) {
  if (arr.length == 0) return 0;
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(
  countUniqueValues([
    -5,
    -2,
    -2,
    -1,
    0,
    0,
    0,
    1,
    2,
    2,
    2,
    2,
    4,
    5,
    5,
    6,
    6,
    7,
    9,
    10,
    13,
    15,
    18,
  ])
);
