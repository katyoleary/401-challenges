'use strict';

const solution = require('../solution.js');
require('jest');



describe('Reversed List Module', function() {
  describe('#reverseLL', function(){
    it('should return a reversed link list', function(done) {
      let result = solution.reverseLL(solution.link);
      expect(result).toEqual({
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 1,
              next: null
            }
          }
        }
      });
      done();
    });
  });
});