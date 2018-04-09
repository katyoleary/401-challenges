'use strict';

const solution = require('../solution.js');
require('jest');

describe('bst node removal', () => {
  it('should return the tree without the node passed in', () => {
    let result = solution.removeNode(solution.root, 10);
    expect(result).toEqual({ val: 11,
      left:
       { val: 7,
         left: { val: 4, left: null, right: null },
         right: { val: 9, left: null, right: null } },
      right:
       { val: 14,
         left: null,
         right: { val: 22, left: null, right: null } } });
  })
});