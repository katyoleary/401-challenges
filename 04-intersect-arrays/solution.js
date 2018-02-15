'use strict';

function intersect(arr1, arr2) {
    var result = [];
    arr1.forEach(function(v) {
      arr2.forEach((w) => {
        if(v===w) {
          result.push(v);
        };
      });
    });
    return result;
  };