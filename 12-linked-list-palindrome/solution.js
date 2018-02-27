'use strict';

function isPalindrome(linkedList) {
  let array = [];
  let current = linkedList;

  while(current !== null){
    array.push(current.val);
    current = current.next
  }

  console.log(array);
  console.log(array.reverse());
  console.log(array === array.reverse());
  return array === array.reverse();

}

let list = {
  val: 1,
  next: {
    val: 2, 
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 3, 
          next: {
            val: 2, 
            next: {
              val: 1,
              next: null
            }
          }
        }
      }
    }
  }
}

isPalindrome(list);