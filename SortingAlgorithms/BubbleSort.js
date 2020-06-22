// Bubble Sort

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    var noswap;
    for (var j = 0; j < i - 1; j++) {
      var noswap = true;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noswap = false;
      }
    }
    if (noswap) break;
  }

  return arr;
}
console.log(bubbleSort([2, 1, 7, 4, 6, 5, 7, 2]));
