'use strict';

function removeNode(link, n) {
  let current = link;
  
  while(current.next !== null) {
    if(current.next.val === n) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  // console.log(link);
  return link;
}

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

removeNode(ll, 2);

module.exports = {
  'removeNode': removeNode, 
  'll': ll
}
