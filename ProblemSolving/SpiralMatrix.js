// Given a matrix, print the elements in a spiral order,

function spiralPrint(array) {
  var topRow = 0,
    leftColumn = 0,
    bottomRow = array.length - 1,
    rightColumn = array[0].length - 1;
  while (topRow < bottomRow && leftColumn < rightColumn) {
    for (var col = 0; col <= rightColumn; col++) {
      console.log(array[topRow][col]);
    }
    topRow++;
    for (var row = topRow; row <= bottomRow; row++) {
      console.log(array[row][rightColumn]);
    }
    rightColumn--;

    if (topRow <= bottomRow) {
      for (var col = rightColumn; col >= 0; col--) {
        console.log(array[bottomRow][col]);
      }
      bottomRow--;
    }
    if (leftColumn <= rightColumn) {
      for (var row = bottomRow; row > topRow; row--) {
        console.log(array[row][leftColumn]);
      }
      leftColumn++;
    }
  }
}
var Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(spiralPrint(Matrix));
