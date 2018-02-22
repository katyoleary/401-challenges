'use strict';

function sortCombined(arr1, arr2) {
  let combined = [];
  for(var i = 0; i < arr2.length; i++){
    combined.push(arr2[i]);
  }
  for(var i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
  }

  var done = false;
  while(!done) {
    done = true;
    for(var i = 1; i < combined.length; i++) {
      if(combined[i-1] > combined[i]){
        done = false;
        var temp = combined[i - 1];
        combined[i -1] = combined[i];
        combined[i] = temp;
      }
    }
  }
  return combined;
}