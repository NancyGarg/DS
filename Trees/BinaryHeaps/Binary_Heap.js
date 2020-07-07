class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;

        index = parentIndex;
      } else break;
    }
  }
  extractMax() {
    let max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let index = 0;
      while (index <= this.values.length) {
        let child1 = 2 * index + 1;
        let child2 = 2 * index + 2;
        let swap = null;
        let leftchild, rightchild;

        if (child1 < this.values.length) {
          leftchild = this.values[child1];
          if (leftchild > this.values[index]) {
            swap = leftchild;
          }
        }
        if (child2 < this.values.length) {
          rightchild = this.values[child2];
          if (
            (swap == null && rightchild > this.values[index]) ||
            (swap != null && rightchild > leftchild)
          ) {
            swap = rightchild;
          }
        }

        if (swap == null) break;
        let temp = this.values[swap];
        this.values[swap] = this.values[index];
        this.values[index] = temp;
        index = swap;
      }
    }
    return max;
  }
}
