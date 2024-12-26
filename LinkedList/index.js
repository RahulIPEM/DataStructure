class Node {
  constructor(number) {
    this.value = number;
    this.next = null;
  }
}

class LinkedList {
  constructor(number) {
    const newNode = new Node(number);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(number) {
    const newNode = new Node(number);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let pre = this.head;
      let temp = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }

  unshift(number) {
    if (!this.head) {
      this.push(number);
    } else {
      const newNode = new Node(number);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length === 0) this.tail = null;
      return temp;
    }
  }

  insert(index, number) {
    console.log(index, " =============== ", this.length);
    if (index > this.length - 1) {
      return "Out of bound error";
    } else if (index === 0) {
      this.unshift(number);
    } else if (this.length - 1 === index) {
      this.push(number);
    } else {
      let count = 0;
      let pre = this.head;
      let temp = this.head;
      while (temp.next && count < index) {
        pre = temp;
        temp = temp.next;
        count++;
      }
      const newNode = new Node(number);
      pre.next = newNode;
      newNode.next = temp;
      this.length++;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(7);
console.log(JSON.stringify(myLinkedList, null, 2));
// console.log("### POP ###");
// console.log(myLinkedList.pop());
// console.log("### UNSHIFT ###");
// myLinkedList.unshift(11);
// console.log("### SHIFT ###");
// myLinkedList.shift();
// myLinkedList.shift();
// console.log(myLinkedList.shift());
// console.log(JSON.stringify(myLinkedList, null, 2));
myLinkedList.insert(0, 11);
myLinkedList.insert(3, 13);
myLinkedList.insert(1, 19);
console.log(JSON.stringify(myLinkedList.insert(5, 19), null, 2));
console.log(JSON.stringify(myLinkedList.insert(9, 15), null, 2));
