'use strict';

function howManyOnes(array) {
  var count = 0;
  var highCount = 0;

  for(var i = 0; i < array.length; i++) {
    if(array[i] === 1) {
      count++;
      if(count > highCount) {
        highCount = count;
      }
    }
    if(array[i] === 0) {
      count = 0;
    }
  }
  return highCount;
}

let nums = [1, 1, 0, 1, 1, 1];

module.exports = {
  'howManyOnes': howManyOnes, 
  'nums': nums,
}