// Insertion Sort

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    ele = arr[i];
    var j = i - 1;
    while (arr[i] < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = ele;
  }
  return arr;
}
console.log(insertionSort([4, 2, 5, 8, 7, 2, 6, 4, 6, 7, 9]));
