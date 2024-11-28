import sh from "../code/String/StringHandler.js";

let checkString = "abcabcbb";

class StringExecutor {
  constructor() {
    this.smp = sh.StringMediumProblems();
    this.executemediumproblems();
    console.log("Inside Executor cotroller");
  }

  executemediumproblems = () => {
    this.smp.zigzagConversion();
  };
}

const se = new StringExecutor();
