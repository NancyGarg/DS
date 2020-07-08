// Funtion accepts a sorted array of integers and returns the first pair whose sum is 0.

function sumZero(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if ((sum = 0)) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
}
