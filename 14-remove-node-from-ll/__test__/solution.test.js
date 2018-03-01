'use strict';

let solution = require('../solution.js');
require('jest');

describe('Remove Node Test', function(){
  describe('#removeNode', function(){
    it('should remove a node from a linked list', function(done) {
      let result = solution.removeNode(solution.ll, 2)
      expect(result).toEqual({val: 1, next: { val: 3, next: { val: 4, next: null } } })
      done();
    })
  })
})