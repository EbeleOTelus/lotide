const eqObjects = function(object1, object2) {
  let x = Object.keys(object1);
  let y = Object.keys(object2);
  if (x.length !== y.length) {
    return false;
  }
  for (let key of x) {
    if (object1.key !== object2.key) {
      return false;
    }
  }


  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  var size = Object.keys(actual).length === Object.keys(expected).length;
  let result = true;
  for (let key in actual) {
    if (actual.key !== expected.key)
      return false;

  }
  if (result && size) {
    console.log("passed");
  } else {
    console.log("failed");
  }


};
//console.log(`Example label: ${inspect(actual)}`);

