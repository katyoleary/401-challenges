'use strict';

const utils = require('../utils.js');
require('jest');

describe('utils module', () => {
  describe('#map', () => {
    it('should preform a map function on an array', done => {
      let result = utils.map(utils.testArr, utils.callback1);
      expect(result).toEqual([ 2, 4, 6, 8, 10 ]);
      done();
    })
  })

  describe('#fileter', () => {
    it('should filter an array', done => {
      let result = utils.filter(utils.testArr, utils.callback2);
      expect(result).toEqual([ 1, 2 ]);
      done();
    })
  })

  describe('#reduce', () => {
    it('should reduce an array', done => {
      let result = utils.reduce(utils.testArr, utils.callback3, 0);
      expect(result).toEqual(15);
      done();
    })
  })
})