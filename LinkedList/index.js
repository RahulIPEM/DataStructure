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

  get(index) {
    if(index >= this.length || index < 0) {
        return undefined;
    }else {
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp;
    }
  }

  set(index, number) {
    let temp = this.get(index);
    if(temp) {
        temp.value = number
        return true
    }
    return false;
  }

  insert(index, number) {
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
// myLinkedList.push(5);
// myLinkedList.push(7);
// console.log("### POP ###");
console.log(myLinkedList.pop());
// console.log("### UNSHIFT ###");
// myLinkedList.unshift(11);
// console.log("### SHIFT ###");
// myLinkedList.shift();
// myLinkedList.shift();
// console.log(myLinkedList.shift());
// console.log(JSON.stringify(myLinkedList, null, 2));
// myLinkedList.insert(0, 11);
// myLinkedList.insert(3, 13);
// myLinkedList.insert(1, 19);
console.log("### GET ###");
// console.log(JSON.stringify(myLinkedList, null, 2));
console.log(myLinkedList.get(1));
// console.log(myLinkedList.get(10));