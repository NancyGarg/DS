// Find Common elements in K-sorted Arrays

function commonElements(kArray) {
  var hashMap = {};
  var last,
    answer = [];
  for (var i = 0; i < kArray.length; i++) {
    var currentArray = kArray[i];
    last = null;
    for (j = 0; j < currentArray.length; j++) {
      currentElement = currentArray[j];
      if (currentArray != last) {
        if (!hashMap[currentElement]) {
          hashMap[currentElement] = 1;
        } else {
          hashMap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }
  for (var item in hashMap) {
    if (hashMap[item] == kArray.length) {
      answer.push(item);
    }
  }
  return answer;
}
console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
);
