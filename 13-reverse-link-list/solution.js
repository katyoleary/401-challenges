'use strict';

 
function reverseLL(ll) {
  if(!ll) return null;

  let reversedLL = {next:null};
  let current = ll;

  while(current.next !== null) {
    reversedLL.val = current.val;
    let newObj = {val: null, next: reversedLL};
    reversedLL = newObj;
    current = current.next;
  }
  reversedLL.val = current.val;
  return reversedLL;
}

  const link = {
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


module.exports = {
  'reverseLL': reverseLL, 
  'link': link,
}