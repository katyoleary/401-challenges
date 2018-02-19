'use strict';

function disappeared(arr) {
    var results = [];
  
    var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });
  
    for(var i = 1; i < max; i++) {
      if(!arr.includes(i)) {
        results.push(i);
      }
    };
    return results;
  };

  