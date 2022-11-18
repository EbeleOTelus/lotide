const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);

  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


// assertEqual(1, 1);


const findKey = function(objects, callback) {
  //onst Obj = Object.keys(objects);
  // console.log(Obj);
  for (let key in objects) {
    //  console.log(callback(key))
     if (callback(objects[key]) === true) {
     
      return key;
    } 
    
  };
  return undefined;
}

  // findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri": { stars: 3 },
  //   "noma": { stars: 2 },
  //   "elBulli": { stars: 3 },
  //   "Ora": { stars: 2 },
  //   "Akelarre": { stars: 3 }
  // }, x => x.stars === 2); // => "noma"
  const object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  assertEqual(findKey(object1, x => x.stars === 2),"noma");
  assertEqual(findKey(object1, x => x.stars === 4), "noma");
  assertEqual(findKey(object1, x => x.stars === 3), "Akaleri");

  