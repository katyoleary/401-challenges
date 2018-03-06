'use strict';

const solution = require('../solution.js');
require('jest');

describe('Queue Module', function() {
  describe('#enqueue test', function() {
    it('should return inStack of 1, 2, 3', done => {
      solution.newQ.enqueue(1)
      solution.newQ.enqueue(2)
      solution.newQ.enqueue(3)
      let result = solution.inStack;
      expect(result).toEqual([ 1, 2, 3 ]);
      done();
    });
  });

  describe('#dequeue test', function() {
    it('should return an outStack of 3, 2, 1', done => {
      solution.newQ.dequeue();
      solution.newQ.dequeue();
      solution.newQ.dequeue();
      let result = solution.outStack;
      expect(result).toEqual([ 3, 2, 1 ]);
      done();
    });
  });
});