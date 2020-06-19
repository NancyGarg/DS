// Selection Sort

function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 2, 4, 8, 3, 7, 9, 3, 6]));
