class DynamicArray {

  constructor(defualtSize = 4) {

    // Your code here
    this.data = [];
    this.capacity = defualtSize;
    this.length = 0;
    //allocation:
    for (let i = 0; i < defualtSize; i++){
      this.data[i] = undefined;
    }
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[0] = val;
    this.length++;
  }

}


module.exports = DynamicArray;
