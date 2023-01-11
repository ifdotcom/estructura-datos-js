// const arr =["Fernanda", "Daniela", "Maria"]

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //  retorna el array
  get(index) {
    return this.data[index];
  }
  //   agrega elementos al array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //   elimina el ultimo elemento
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //   elimina un elemento random
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new myArray();
