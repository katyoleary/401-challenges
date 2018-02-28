'use strict';

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
console.log('ll', ll);

function reverseList(ll) {
  let arr = [];
  let current = ll;
  console.log('CURRENT', current);
  
  while(current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  arr = arr.reverse();
  console.log('REVERSED ARRAY', arr);

  
  for(var i = 0; i < arr.length; i++) {
    while(current !== null) {
      current.val = arr[i];
      current = current.next;
    }
  }
console.log('ll', ll);
return ll;
}

reverseList(ll);




