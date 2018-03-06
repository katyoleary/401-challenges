'use strict';

class StackNode{
  constructor(val) {
    if(!val) return new Error('value not provided');
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(maxSize=1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('stack overflow');
    let node = new StackNode(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp.val;
  }

  peek() {
    return this.top;
  }

}

class Queue{
  constructor() {
  this.inbox = new Stack;
  this.outbox = new Stack;
  }

  enqueue(val) {
    this.inbox.push(val);
  }

  dequeue() {
    if(this.outbox.size === 0) {
      while(this.inbox.size > 0) {
        let del = this.inbox.pop();
        this.outbox.push(del);
      }
    }
    this.outbox.pop();
  }
}

module.exports = {
  'StackNode': StackNode,
  'Stack': Stack,
  'Queue': Queue
}