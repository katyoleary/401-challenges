'use strict';

const { tree, findNode } = require('../solution.js');

describe('BST Find', () => {
  it('should return true or false', () => {
    let result = findNode(tree, 9);
    expect(result).toBeTruthy();

    result = findNode(tree, 100);
    expect(result).toBeFalsy();
  })
})