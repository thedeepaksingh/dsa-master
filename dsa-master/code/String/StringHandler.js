import ma from "../../helpers/Multi-dimensional-Arrays.js";

class StringHandler {
  constructor() {
    this.multiDimensionalArrayInstance = ma;
  }

  StringMediumProblems = () => {
    return {
      // 13 - leet code
      longestCommonPrefix: async (str = []) => {
        let matchedString = "";
        if (str && str.length > 0) {
          for (var i = 0; i <= str.length - 1; i++) {
            for (var j = 0; j <= str[i].length - 1; j++) {
              console.log("jth Item: " + str[i][j]);
              if (
                str[i][j] &&
                str[i + 1][j + 1] &&
                str[i + 2][j + 2] &&
                str[i][j] === str[i + 1][j + 1] &&
                str[i + 1][j + 1] === str[i + 2][j + 2]
              ) {
                matchedString += str[i][j];
              }
            }
          }

          if (matchedString.length > 0) {
            console.log("Matched prefix: " + matchedString);
          } else {
            console.log("No prefix matched");
          }
        }
      },
      // 12 - Leet Code
      IntegertoRoman: async (num = 0) => {
        const romanMap = [
          [1000, "M"],
          [900, "CM"],
          [500, "D"],
          [400, "CD"],
          [100, "C"],
          [90, "XC"],
          [50, "L"],
          [40, "XL"],
          [10, "X"],
          [9, "IX"],
          [5, "V"],
          [4, "IV"],
          [1, "I"],
        ];
        let result = "";

        for (const [value, symbol] of romanMap) {
          console.log("Val: " + value + " Sym: " + symbol);
          while (num >= value) {
            result += symbol;
            num -= value;
          }
          if (num === 0) {
            break;
          }
        }
        console.log("Integertoroman: " + result + " Num: " + num);
        return result;
      },

      // 10 - Leet code
      regularExpressionMatching: async (str = "", p = "") => {},

      // 8 -Leet Code
      stringToInteger: async (str = "") => {
        let finalInt;
        let sign = 1;
        if (str) {
          str = str.trim();
          console.log("Trimmed string: ", str);
          for (var i = 0; i <= str.length - 1; i++) {
            console.log("Item : ", str[i]);
            if (str[0] === "-") {
              sign = -1;
            }
            if (NaN(str[1])) {
              return;
            }
            finalInt = str;
          }
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
export default sh;
