class StringHandler {
  constructor() {}
  sm = {
    // 3 - Leet Code
    lengthoflongestSubstringWithoutRepeatingCharacters: (str) => {
      /**
       *
       * using sliding window concept
       * using 2 pointer initiating from the begining and removing the similar character and narrowing the window
       * using set or dictionary
       * updating the length of maximum non repeating sustring
       *
       */

      if (str) {
        let lenStr = str.length;
        let left = 0; // Left pointer of the sliding window
        let right = 0; // Right pointer of the sliding window
        let maxlength = 0; // To track the maximum length of the substring
        const mySet = new Set(); // Set to track unique characters in the window

        while (right < lenStr) {
          // If we encounter a duplicate, shrink the window by moving `left`
          while (mySet.has(str[right])) {
            mySet.delete(str[left]);
            left++;
          }
          // Add the current character to the set (window expands)
          mySet.add(str[right]);

          // Update the maximum length of the substring
          maxlength = Math.max(maxlength, right - left + 1);

          // Expand the window by moving the `right` pointer
          right++;
        }
        mySet.forEach((v) => console.log("Set Item: " + v));

        return maxlength; // Return the maximum length of the substring without repeating characters
      }
      console.log("Logging: lengthoflongestSubstring string length -> ", str);
      return 0;
    },
    longestPalindromicString: (str) => {
      if (str) {
        /**
         *
         */

        let left = 0;
        let right = str.length - 1;
        let lenStr = str.length - 1;
        let myMap = new Map();

        while (right > left) {
          if (str[right] === str[left]) {
            right--;
            left++;
          }
          // break;
          console.log("Left: " + str[left] + " Right: " + str[right]);
        }
      }

      return 0;
    },
  };
}

const sh = new StringHandler();

export default sh;
