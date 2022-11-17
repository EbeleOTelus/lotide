function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {

      return false;
    }

  }
  return true;
}

function assertArraysEqual(array1, array2){
let equalLength = array1.length === array2.length;
  let result = true;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) 

    result = false;
}
if (result && equalLength){
  console.log('Good job!');
}
else {
  console.log('Not the same');
}
}




const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(map(words, word => word[2]), ['o', 'n', '', 'j', 'm']);
