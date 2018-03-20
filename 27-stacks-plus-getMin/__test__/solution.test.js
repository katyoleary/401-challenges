'use strict';
 
const solution = require('../solution.js');
require('jest');

describe('stacks module', () => {
  describe('#push', () => {
    it('should push a val to the stack', done => {
      let result = solution.testStack.push(33);
      expect(result).toEqual(33);
      done();
    })
  })
  describe('#pop',() => {
    it('should pop off top val', done => {
      let result = solution.testStack.pop();
      expect(result).toEqual(33);
      done();
    })
  })
  describe('#getMin', () => {
    it('should return smallest val in stack', done => {
      solution.testStack.push(13);
      solution.testStack.push(-30);
      let result = solution.testStack.getMin();
      expect(result).toEqual(-30);
      done();
    })
  })
  describe('#peek', () => {
    it('should return val off top of stack', done => {
      solution.testStack.push(55);
      let result = solution.testStack.peek();
      expect(result).toEqual(55);
      done();
    })
  })
})