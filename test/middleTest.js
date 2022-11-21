
// const assertArraysEqual = require('../assertArraysEqual');

// const middle = require('../middle');

// // console.log(middle([1, 2, 3]))
// // console.log(middle([1, 2, 3, 4, 5]))
// // console.log(middle([1, 2, 3, 4]))
// assertArraysEqual(middle([1, 2, 3]),[3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]


const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {


  it('returns pass for middle([1, 2, 3])', () => {
    
    assert.deepEqual(middle([1, 2, 3]), [2]);

  }); 
  it('returns pass for middle([1, 2, 3, 4, 5])', () => {
    
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);

  });

  it('returns pass for middle([1, 2, 3, 4])', () => {
    
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);

  });
  it('returns pass for middle([1, 2, 3, 4, 5, 6])', () => {
    
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

});
});