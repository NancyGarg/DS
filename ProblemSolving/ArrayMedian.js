// Get Medium of two sorted Arrays of same size

function medianArray(array) {
  if (array.length % 2 == 1) {
    return array[Math.floor(array.length / 2)] / 2;
  } else {
    return (
      (array[Math.floor(array.length / 2)] +
        array[Math.floor(array.length / 2) - 1]) /
      2
    );
  }
}
function medianOfSortedArrays(arr1, arr2, len) {
  if (len <= 0) return -1;
  if (len == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (len == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }
  var medianArray1 = medianArray(arr1);
  var medianArray2 = medianArray(arr2);
  if (medianArray1 == medianArray2) return medianArray2;
  var offset = len % 2 == 0 ? 1 : 0;
  var offsetMinus = Math.floor(len / 2) - offset;
  var offsetPlus = Math.floor(len / 2) + offset;
  if (medianArray1 < medianArray2) {
    return medianOfSortedArrays(
      arr1.slice(offsetMinus),
      arr2.slice(offsetMinus),
      offsetPlus
    );
  } else {
    return medianOfSortedArrays(
      arr2.slice(offsetMinus),
      arr1.slice(offsetMinus),
      offsetPlus
    );
  }
}
console.log(medianOfSortedArrays([1, 2, 3], [4, 6, 7], 3));
