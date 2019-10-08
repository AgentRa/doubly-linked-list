const Node = require('./node');



class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {

      const node = new Node(data);

      if (this.length === 0){
        this._head = node;
        this._tail = node;
      } else {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;
      }
      this.length++;
    }


    head() {
      return this._head.data;
    }

    tail() {
      return this._head.data;
    }

    at(index) {

      let current = this._head;
      let i = 0;

      while(i < index) {
        current = current.next;
        i++;
      }
      return current.data;
    }

    insertAt(index, data) {
      let current = this._head;
      let i = 1;
      let node = new Node(data);
      if (index === 0) {
        this._head.prev = node;
        node.next = this._head;
        this._head = node;
      } else {
          while(current) {
            current = current.next;
            if (i === index){
              node.prev = current.prev;
              current.prev.next = node;
              node.next = current;
              current.prev = node;
            }
            i++;
          }
      }
      this.length++;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this._head.data = null;
      this._tail.data = null;
      this.length = 0;
    }

    deleteAt(index) {
      let current = this._head;
      let i = 0;
      let prev = null;

      while(i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
      current.next.prev = prev;
    }

    reverse() {
      let current = this._head;
      let prev = null;
      let next = null;

      while(current) {
        next = current.next;
        prev = current.prev;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
      }
      this._tail = this._head;
      this._head = prev;
    }

    indexOf(data) {
      let current = this._head;
      let index = 0;

      while (index < this.length) {
        if (current.data == data) {
          return index;
        }
        current = current.next;
        index++;
      }

      return -1;
    }
}

module.exports = LinkedList;

