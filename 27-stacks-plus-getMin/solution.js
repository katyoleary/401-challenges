'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top.val;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    
    return temp.val;
  }

  peek() {
    return this.top.val;
  }

  getMin() {
    let current = this.top;
    this.min = current.val;
    while(current.next !== null) {
      if(current.val < this.min) {
        this.min = current.val;
      }
      current = current.next;
    }
    return this.min;
  }
}

let testStack = new Stack();
testStack.push(11);
testStack.push(54);
testStack.push(4);

console.log(testStack);
console.log('PUSH', testStack.push(-3));
console.log('MIN', testStack.getMin());
testStack.push(-5);
console.log('PEEK', testStack.peek());
console.log('POP', testStack.pop());

let num = 3;

module.exports = {
  'Stack': Stack,
  'num': num,
  'testStack': testStack
}