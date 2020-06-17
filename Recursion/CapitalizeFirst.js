// Given an array of strings ,capitalize the first letter of each string in the array

function capitalizeFirst(array) {
  if (array.length == 0) {
    console.log("Empty list!!");
    return;
  }
  if (array.length == 1)
    return [array[0][0].toUpperCase() + array[0].substr(1)];

  let res = capitalizeFirst(array.slice(0, -1));
  const str =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(str);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
