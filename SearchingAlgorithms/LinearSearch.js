// Linear Search

function linearSearch(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
  }
  return -1;
}
console.log(linearSearch([10, 15, 20, 25, 30], 20)); // 2
console.log(linearSearch([], 20)); // -1
