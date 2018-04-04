'use strict';

const BST = require('../solution.js').BST;
const TreeNode = require('../solution.js').TreeNode;

require('jest');

beforeEach(() => {
  const nums = [5, 3, 4, 6];
  this.bst = new BST();
  for (let i of nums) {
    this.bst.insert(new TreeNode(i));
  }
})

afterEach(() => {
  delete this.bst;
})

describe('testing post-Order traversal', () => {
  it.only('should return array of [4, 3, 6, 5]', () => {
    let temp = this.bst.returnNodes();
    console.log(temp);
    expect(temp).toEqual([5, 3, 4, 6]);
  })
})