'use strict';

function findNearest(bst, nearest) {
  let difference = Math.abs(bst.val - nearest);
  let result = bst.val;
  console.log(bst.val);
  _traverse(bst);

  function _traverse(node) {
    if(Math.abs(node.val - nearest) < difference) {
      difference = Math.abs(node.val - nearest);
      result = node.val;
    }

    if(node.left) _traverse(node.left);
    if(node.right) _traverse(node.right);
  }

  return result;
}

let tree = { 
  val: 10, 
  left: {
    val: 7,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    }
  },
  right: {
    val: 14,
    left: {
      val: 11,
      left: null,
      right: null,
    },
    right: {
      val: 22,
      left: null,
      right: null,
    }
  }
}

console.log(findNearest(tree, 8));


module.exports = {
  'findNearest': findNearest, 
  'tree': tree,
}