'use strict';

const LinkedList = require('../DSA-LinkedList/linkedlist');

class HashMap {
  constructor(length = 8) {
    this._hashTable = [];
    this._length = length;
  }

  static _hashString(string) {
    let hash = 5381;

    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }

    return hash >>> 0;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    return hash % this._length;

  }

  get(key) {
    const index = this._findSlot(key);

    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    const list = this._hashTable[index];
    let node = list.head;

    while (node.value !== null) {
      if (node.value.key === key) {
        return node.value.value;
      }
      node = node.next;
    }
    throw new Error('Key error');
  }

  has(key) {
    const index = this._findSlot(key);
    const list = this._hashTable[index];
    
    if (!list) {
      return false;
    }

    let node = list.head;

    while (node.value !== null) {
      if (node.value.key === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  set(key, value) {

    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      // this.length++;
      const list = new LinkedList();
      this._hashTable[index] = list;
      list.insertFirst({
        key,
        value,
        DELETED: false
      });
    } else {
      const list = this._hashTable[index];
      let node = list.head;

      while (node !== null) {
        if (node.value.key === key) {
          node.value.value = value;
          node.value.DELETED = false;
          return;
        }
        node = node.next;
      }
      list.insertLast({
        key,
        value,
        DELETED: false
      });
    }
  }

  delete(key) {
    const index = this._findSlot(key);
    const list = this.hashTable[index];

    if (list === undefined) {
      throw new Error('Key error');
    }
    let node = list.head;

    while (node.value !== null) {
      if (node.value.key === key) {
        node.value.DELETED = true;
        return;
      }
      node = node.next;
    }

    throw new Error('Key error');
  }

}

module.exports = HashMap;