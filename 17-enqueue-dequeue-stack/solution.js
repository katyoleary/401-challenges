'use strict';

var inStack = [];
var outStack = [];

class Queue{
  constructor() {
    this.next = null;
    this.length = 0;
  }
  
  enqueue(val) {
    inStack.push(val);
  }
  
  dequeue() {
    if(outStack.length === 0) {
      while(inStack.length > 0) {
        let del = inStack.pop();
        outStack.push(del);
      }
    }
  }
};

var newQ = new Queue();

module.exports = {
  'Queue': Queue,
  'inStack': inStack, 
  'outStack': outStack,
  'newQ': newQ,
}