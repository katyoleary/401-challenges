'use strict';

const solution = require('../solution.js');
require('jest');

describe('#findNearest', () => {
  it('should return nearest val', () => {
    let result = solution.findNearest(solution.tree, 8);
    expect(result).toEqual(7);
  })
})
