import ma from "../../helpers/Multi-dimensional-Arrays.js";

class MiscHandler {
  constructor() {
    this.multiDimensionalArrayInstance = ma;
  }

  MiscProblems = () => {
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
    };
  };
}

const mh = new MiscHandler();
export default mh;
