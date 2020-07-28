/*Given a matrix representing a tic-tac-toe board, determine whether someone won, whether it was a tie, 
or whether the game has not ended yet */

function checkRow(rowArr, player) {
  for (var i = 0; i < 3; i++) {
    if (rowArr[i] != player) return false;
  }
  return true;
}
function checkColumn(boardMatrix, columnIndex, player) {
  for (var i = 0; i < 3; i++) {
    if (boardMatrix[i][columnIndex] != player) return false;
  }
  return true;
}
function ticTacToeCheck(boardMatrix, player) {
  var rowWin =
    checkRow(boardMatrix[0], player) ||
    checkRow(boardMatrix[1], player) ||
    checkRow(boardMatrix[2], player);
  var columnWin =
    checkColumn(boardMatrix, 0, player) ||
    checkColumn(boardMatrix, 1, player) ||
    checkColumn(boardMatrix, 2, player);
  var diagonalLeftToRightWin =
    boardMatrix[0][0] == player &&
    boardMatrix[1][1] == player &&
    boardMatrix[2][2] == player;
  var diagonalRightToLeftWin =
    boardMatrix[2][0] == player &&
    boardMatrix[1][1] == player &&
    boardMatrix[0][2] == player;
  return (
    rowWin || columnWin || diagonalLeftToRightWin || diagonalRightToLeftWin
  );
}
var board = [
  ["O", "-", "X"],
  ["-", "O", "-"],
  ["-", "X", "O"],
];
console.log(ticTacToeCheck(board, "X"));
console.log(ticTacToeCheck(board, "O"));
