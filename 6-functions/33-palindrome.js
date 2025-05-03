function isPalindrome(word) {
  word = word.toLowerCase();

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("racaviaryecar"));
