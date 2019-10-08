const Node = require('./node');



class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {

      const node = new Node(data);

      if (!this._head){
        this._head = node;
      } else {
        this._tail.next = node;
        node.prev = this._tail;

      }

      this._tail = node;
      this.length++;
      return this;
    }


    head() {
      return (this._head) ? this._head.data : null;
    }

    tail() {
      return (this._tail) ? this._tail.data : null;
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
      if (!this._head) {
        this.append(data);
        return this;
      } else {
        let current = this._head;
        let i = 0;

        while (i < index) {
          current = current.next;
          i++;
        }
        const node = new Node(data, current.prev, current);
        current.prev.next = node;
        current.prev = node;
        return this;
      }
      this.length++;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      if(index < 0 || this.length <= index) {
        return null;
      }

      if (index === 0) {
        this._head = this._head.next;
        if(this._head === null) {
          this._tail = null;
        } else {
          this._head.prev = null;
        }
        return this;
      }

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
      this.length--;
      return this;
    }

    reverse() {
      let current = this._head;
      let prev = null;
      let next = null;

      if (this.length === 1) {
        return this;
      }

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