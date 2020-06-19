// Binary Search

function binarySearch(arr, num) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.round((start + end) / 2);

  while (num != arr[mid] && start <= end) {
    // console.log(start, end, mid);
    if (arr[mid] == num) return mid;
    else if (num < arr[mid]) end = mid - 1;
    else start = mid + 1;
    var mid = Math.round((start + end) / 2);
  }
  return arr[mid] == num ? mid : -1;
}
console.log(binarySearch([2, 3, 6, 9, 13, 16, 20, 24, 40, 57], 40)); // 8
console.log(binarySearch([2, 3, 6, 9, 13, 16, 20, 24, 40, 57], 17)); // -1
console.log(binarySearch([], 2)); // -1
