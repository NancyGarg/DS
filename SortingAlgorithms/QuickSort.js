// Quick sort

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[Math.floor((start + end) / 2)];
  var swapIndex = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([2, 4, 1, 4, 6, 3, 45, 23, 45, 37, 98, 12]));
