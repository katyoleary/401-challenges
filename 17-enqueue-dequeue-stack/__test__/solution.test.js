'use strict';

const {StackNode, Stack, Queue} = require('../solution.js');
require('jest');

let q = new Queue();
q.enqueue(1);
q.enqueue(2);

describe('Double Stack Queue', function() {
  describe('#enqueue', function() {
    it('should add a value to in stack', function() {
      q.enqueue(3);
      expect(q.inbox.top.val).toEqual(3);
    });
  });
  describe('#dequeue', function() {
    it('should remove a value from the out stack', function() {
      q.dequeue();
      expect(q.outbox.top.val).toEqual(2);
    });
  });
});