class MDArrays {
  constructor() {}

  async create2DimensionalArray(m = null, n = null) {
    m = m ? m : 3;
    n = n ? n : 3;

    if (m > 1 && n > 1) {
      let arr2d = new Array(m).fill(null).map(() => {
        return new Array(n).fill(null).map(() => (Math.random() < 0.5 ? 0 : 1));
      });
      // console.log("Array: ", arr2d);
      return arr2d;
    }
  }
}

const ma = new MDArrays();
// ma.create2DimensionalArray();

export default ma;
