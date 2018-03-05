'use strict';

const solution = require('../solution.js');
require('jest');

describe('Solution Module', function() {
  describe('#addItem', function() {
    it('should add an item to the queue', function(done) {
      let result = solution.addItem(solution.queue, 'kiwi')
      expect(result).toEqual({ '0': 'apple',
      '1': 'pear',
      '2': 'banana',
      '3': 'kiwi',
      next: 0,
      length: 4 });
      done();
    });
  });
});