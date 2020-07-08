// Implementing hash table using arrays

class HashTable {
  constructor(size = 43) {
    this.keyMap = new Array(size);
  }

  // Hash function
  hash(str) {
    let total = 0;
    let prime = 51;
    for (let i = 0; i < Math.min(str.length, 100); i++) {
      let char = str[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  // Accepts a key-value pair, hashes the key, stores the pair in table using separate chaining
  set(key, value) {
    let hashedKey = this.hash(key);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);
  }

  // Takes in the key and return its value from table
  get(key) {
    let hashedKey = this.hash(key);
    if (this.keyMap[hashedKey]) {
      for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
        if (this.keyMap[hashedKey][i][0] == key) {
          return this.keyMap[hashedKey][i][1];
        }
      }
    }
    return undefined;
  }

  // Loops through the hash table array and returns the array of all the keys in the table without duplicates
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }

  // Loops through the hash table array and returns the array of all the values in the table without duplicates
  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArray;
  }
}
