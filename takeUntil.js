function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {

      return false;
    }

  }
  return true;
}

function assertArraysEqual(array1, array2) {
  let equalLength = array1.length === array2.length;
  let result = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])

      result = false;
  }
  if (result && equalLength) {
    console.log('Good job!');
  }
  else {
    console.log('Not the same');
  }
}








const takeUntil = function(array, callback) {
  let results = [];
  for (item of array) {
    if (callback(item)) {
      return results;
    }
    else {
      results.push(item);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual(takeUntil(data1,x => x < 0 ),[1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === 'to'),["I've", "been"]);