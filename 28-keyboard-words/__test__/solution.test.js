'use strict';

const solution = require('../solution.js');
require('jest');

describe('keyboard module', () => {
  describe('#qwertyCheck', () => {
    it('should return words on a qwertyline', done => {
      let result = solution.qwertyCheck(solution.words);
      expect(result.length).toEqual(3);
      expect(result).toEqual([ 'dad', 'tree', 'pet' ]);
      done();
    })
  })
})