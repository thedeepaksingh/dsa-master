import sh from "../code/String/StringHandler.js";
import ma from "../helpers/Multi-dimensional-Arrays.js";

class StringExecutor {
  constructor() {
    this.smp = sh.StringMediumProblems();
    this.executemediumproblems();
    this.localString = "abcabcbb";
    // console.log("Inside Executor cotroller");
  }

  executemediumproblems = async () => {
    // pending problems ------------------------------
    // this.smp.zigzagConversion();

    
    // completed problems ----------------------------
    // this.smp.Waytolongwords("internationalization");
    // this.smp.Watermelon(8);
    // this.smp.longestPalindromicString(this.localString);
    // this.smp.lengthoflongestSubstringWithoutRepeatingCharacters()
  };
}

const se = new StringExecutor();
