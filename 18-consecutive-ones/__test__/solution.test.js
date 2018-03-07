'use strict';

const solution = require('../solution.js');
require('jest');

describe('How many ones module', function() {
  describe('#howManyOnes', function() {
    it('should return a number, 3', done =>{
      let result = solution.howManyOnes(solution.nums)
      expect(result).toEqual(3);
      expect(typeof result).toEqual('number');
      done();
    });
  });
});