// Returns true if given string is a palindrome

function isPalindrome(str) {
  if (str.length == 1) return true;
  if (str.length == 2) return str[0] == str[1];
  if (str.charAt(0) == str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}
console.log(isPalindrome("awwa")); // true
console.log(isPalindrome("awwajdgjsdg")); // true
console.log(isPalindrome("awa")); // true
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
