import ma from "../../helpers/Multi-dimensional-Arrays.js";

class StringHandler {
  constructor() {
    this.multiDimensionalArrayInstance = ma;
  }

  StringMediumProblems = () => {
    return {
      // 231A - Code forces
      Team: async () => {
        const arr2dresult = await ma.create2DimensionalArray(3, 3);

        console.log("Logging: ", arr2dresult);
        let localArray2D = [...arr2dresult];
        console.log("Logging: local array - > ", localArray2D);
        let outerCount = 0;

        for (var i = 0; i <= localArray2D.length - 1; i++) {
          if (localArray2D[i].length > 0) {
            let innerCount = 0;
            console.log("logging: inner array -> " + localArray2D[i]);
            for (var j = 0; j <= localArray2D[i].length - 1; j++) {
              if (localArray2D[i][j] === 1) {
                innerCount++;
                if (innerCount >= 2) {
                  outerCount++;
                  break;
                }
              }
            }
          }
        }
        if (outerCount > 0) {
          console.log("Logging: Team outpt -> ", outerCount);
        } else {
          console.log("Logging: Team outpt -> ", outerCount);
        }
      },
      // 71A - Code forces
      Waytolongwords: async (str = "") => {
        let strLen = str.length;

        console.log("String: " + str);
        if (strLen && strLen > 10) {
          let left = 0;
          let right = strLen - 1;
          let finalString = `${str[left]}${strLen - 2}${str[right]}`;
          console.log("Final String: " + finalString);
          return finalString;
        } else {
          if (strLen) {
            console.log("Final String: " + str);
          } else {
            console.log("Not valid string");
          }
        }
      },
      // 4A - Code forces
      Watermelon: async (kilos = 0) => {
        // code goes here
        if (kilos > 0) {
          if (kilos % 2 == 0) {
            console.log("True");
            return true;
          } else {
            console.log("False");
            return false;
          }
        } else {
          console.log("False");
          return false;
        }
      },
      // 6 - Leet Code
      zigzagConversion: async (str = "", nrows = 0) => {
        str = str ? str : "PAYPALISHIRING";
        nrows = nrows ? nrows : 4;

        /**
         * Approach:
         *
         * if nrows = 1 => P A Y P A L I S H I R I N G
         * IF nrows = 2 => P Y
         */

        const arr2d =
          await this.multiDimensionalArrayInstance.create2DimensionalArray();
        console.log("Multi-dimensional 2 D Array: " + arr2d);

        let sizeofString = str.length;
        let colSize = Math.ceil(sizeofString / nrows);
        console.log("");
      },
      // 5 - leet Code
      longestPalindromicString: (str = "") => {
        str = str ? str : "racecar";
        const isPalindrome = (ss) => {
          let left = 0;
          let right = ss.length - 1;

          while (left < right) {
            if (ss[left] !== ss[right]) {
              return false;
            }
            left++;
            right--;
          }
          return true;
        };
        if (str) {
          /**
           * Brute force - O(n^3), O(1) --- Implementing
           * Expand Around Center - O(n^2), O(1)
           * Dynamic Programming - O(n^2), O(2)
           * Manachers Algorithm - O(n),O(n)
           */
          let longest = "";
          let strLen = str.length;

          // main loop to iterate over all the substring
          for (let i = 0; i < strLen; i++) {
            for (let j = i + 1; j <= strLen; j++) {
              let subString = "";
              // manually create the substring
              for (let k = i; k < j; k++) {
                subString += str[k];
              }
              if (
                isPalindrome(subString) &&
                subString.length > longest.length
              ) {
                longest = subString;
              }
            }
          }
          console.log("Logging: longest palindromic sub-string -> ", longest);
        }

        console.log("Logging: Original string -> ", str);
      },
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
    };
  };
}

const sh = new StringHandler();
sh.StringMediumProblems().Team();
export default sh;
