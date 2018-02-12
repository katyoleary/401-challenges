'use strict';

function(arr) {
    let ans = {};

    ans.max = arr.reduce(function(a,b){
        return Math.max(a,b);
    });

    ans.min = arr.reduce(function(a,b){
        return Math.min(a,b);
    });

    ans.avg = arr.reduce(function (a,b){
        return a + b;
    });
    ans.avg = ans.avg / arr.length;

    return ans;
}

