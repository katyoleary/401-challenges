'use strict';

const utils = module.exports = {};

utils.map = (arr, callback) => {
  let newArr = [];
  for(let i in arr) {
    newArr.push(callback(arr[i]));
  }

  return newArr;
}

utils.filter = (arr, callback) => {
  let newArr = [];
  for(let i in arr) {
    if(callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

utils.reduce = (arr, callback, intialVal) => {
  let val = intialVal;
  for(let i in arr) {
    val = callback(val, arr[i]);
  }

  return val;
}

utils.testArr = [1, 2, 3, 4, 5];

utils.callback1 = x => {
  return x * 2;
}

utils.callback2 = x => {
  if(x < 3) {
    return x;
  }
}

utils.callback3 = (x, y)  => x + y;

console.log(utils.map(utils.testArr, utils.callback1));
console.log(utils.filter(utils.testArr, utils.callback2));
console.log(utils.reduce(utils.testArr, utils.callback3, 0));

