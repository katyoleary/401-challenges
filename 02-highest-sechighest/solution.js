'use strict';

function maxNums(arr) {
    if (Array.isArray(arr) === false) throw new Error('this is not an array');
    if (!arr) throw new Error('no array entered');
    
    return {
      highest: arr.sort((a,b) => b -a)[0],
      secHighest: arr.sort((a,b) => b-a)[1]
    }
  }

  console.log(maxNums([1, 2, 3, 4, 5, 6]))
  console.log(maxNums([1,3,7]))


//TESTS///

const assert = require('assert');

describe('Max nums check', function() {
  describe('#maxNums', function() {
    it('should return object with 2 highest nums', function() {
      var result = maxNums([1,3,7]);
      assert.ok(result === {highest: 7, secHighest: 3}, 'not equal to object literal')
    });
    it('should throw an error if no arr is entered', function() {
      assert.throws(function() {
        maxNums(); 
      },'no array entered');
    });
    it('should throw an error if other data type is entered', function() {
      var result = maxNums('some string');
      assert.throws(function() {
        maxNums('some string');
      },'this is not an array');
    });
    it('should throw error if floating point integer entered')
  });
});