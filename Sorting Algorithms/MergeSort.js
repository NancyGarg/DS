// Merge Sort

function merge(arr1, arr2) {
  var newArr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2, arr.length)));
  return merge(left, right);
}

console.log(mergeSort([3, 5, 2, 45, 13, 67, 34, 56, 78, 1, 23, 23, 31, 17]));
