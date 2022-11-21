// const assertEqual = require('../assertEqual');
// const tail = require('../tail');



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(tail(words).length, 3); 

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {


  it('returns pass for tail(words).length', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(tail(words).length, 2);

  });
});