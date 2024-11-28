import sh from "../code/String/StringHandler.js";

class StringExecutor {
  constructor() {
    this.smp = sh.StringMediumProblems();
    this.executemediumproblems();
    this.localString = "abcabcbb";
    // console.log("Inside Executor cotroller");
  }

  executemediumproblems = () => {

    // pending problems ------------------------------
    // this.smp.zigzagConversion();


    // completed problems ----------------------------
    // this.smp.Watermelon(8);
    // this.smp.longestPalindromicString(this.localString);
    // this.smp.lengthoflongestSubstringWithoutRepeatingCharacters()
  };
}

const se = new StringExecutor();
