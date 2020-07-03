//Function to determine if second string is the anagram of the first string,
//An anagarama word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

function validAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  var arr1 = {};
  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    arr1[letter] = arr1[letter] ? arr1[letter] + 1 : 1;
  }

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    if (!arr1[letter]) {
      return false;
    } else {
      arr1[letter] = arr1[letter] + 1;
    }
  }
  return true;
}

console.log(validAnagram("ahhja", "jaha"));
