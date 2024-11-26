class MDArrays {
  constructor() {}

  async create2DimensionalArray(m = null, n = null) {
    m = m ? m : 3;
    n = n ? n : 3;

    if (m > 1 && n > 1) {
      let arr2d = new Array(m).fill().map(() => {
        return new Array(n).fill(0).map((i, index) => {
          console.log(`logging 2D Array: ${i + 1} at index: ${index}`);
          return i + 1;
        });
      });

      console.log("Array: ", arr2d);
      return arr2d;
    }
  }
}

const ma = new MDArrays();
// ma.create2DimensionalArray();

export default ma;
