'use strict';

//from https://gist.github.com/primaryobjects/22fb4e2fac20ea49a7e97163eaf29f56

let root = { 
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



function removeNode(root, remove) {
  // Find node to remove.
  if (root !== null) {
      var current = root;
      var stack = [];
      
      while (current) {
          stack.push(current);
          
          if (current.val === remove) {
              // Found the node to remove.
              stack.pop();
              var parent = stack.pop();
  
              if (!current.left && !current.right) {
                  // No children, just remove the node.
                  if (parent && parent.left && parent.left.val === current.val) {
                      parent.left = null;
                  }
                  else if (parent) {
                      parent.right = null;
                  }
                  else {
                      // No parent, this must be the root node.
                      root = [];
                  }
              }
              else if (current.left && !current.right) {
                  // One left child node.
                  if (parent && parent.left && parent.left.val === current.val) {
                      parent.left = current.left;
                  }
                  else if (parent) {
                      parent.right = current.left;
                  }
                  else {
                      // No parent, this must be the root node.
                      root = current.left;
                  }
              }
              else if (current.right && !current.left) {
                  // One right child node.
                  if (parent && parent.left && parent.left.val === current.val) {
                      parent.left = current.right;
                  }
                  else if (parent) {
                      parent.right = current.right;
                  }
                  else {
                      // No parent, this must be the root node.
                      root = current.right;
                  }
              }
              else {
                  // Node has 2 children.
                  // First, find the minimum element in the right subtree of the node to be removed.
                  var minNode = current.right;
                  while (minNode) {
                      if (minNode.left) {
                          minNode = minNode.left;
                      }
                      else {
                          // We're at the bottom of the subtree.
                          break;
                      }
                  }
                  
                  // remove minNode.
                  current = removeNode(current, minNode.val);

                  // Replace value.
                  current.val = minNode.val;
              }
              break;
          }
          else if (remove < current.val) {
              current = current.left;
          }
          else if (remove > current.val) {
              current = current.right;
          }
      }
  }

  return root;
};

console.log(removeNode(root, 10));

module.exports = {
  'removeNode': removeNode, 
  'root': root
}