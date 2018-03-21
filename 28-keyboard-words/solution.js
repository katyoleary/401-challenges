'use strict';

'use strict';

function qwertyCheck(arr) {
  let row1 = /^[qwertyuiop]*$/g
  let row2 = /^[asdfghjkl]*$/g
  let row3 = /^[zxcvbnm]*$/g
  let result = [];

  arr.forEach(word => {
    if(row1.test(word) || row2.test(word) || row3.test(word)) {
      result.push(word)
    }
  })
  console.log(result);
  return result;
}

let words = [ 'sup', 'dad', 'tree', 'snake', 'pet' ];

module.exports = {
  "qwertyCheck": qwertyCheck,
  "words": words,
}