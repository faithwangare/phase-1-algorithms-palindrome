function isPalindrome(word) {
  // Convert the input to lowercase
  const lowerCaseWord = word.toLowerCase();
  // Reverse the string
  const reversedWord = lowerCaseWord.split("").reverse().join("");
  // Check if the reversed string matches the original input
  return lowerCaseWord === reversedWord;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
