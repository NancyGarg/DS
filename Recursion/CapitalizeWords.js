// Given an array of strings ,capitalize each string/word in the array

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length == 0) {
    console.log("Invalid Input");
    return;
  }
  if (arr.length == 1) return [arr[0].toUpperCase()];

  let res = capitalizeWords(arr.slice(1));
  res.unshift(arr[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
