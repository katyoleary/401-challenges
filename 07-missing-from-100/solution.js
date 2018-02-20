'use strict';

function findMissing(arr){
  for (var i = 0; i < 100; i++){
    if (!arr.includes(i)){
      return i;
    }
  }
};
