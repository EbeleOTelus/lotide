const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);

  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);





const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function(bestTVShowsByGenre,value){
const ObjArray = Object.keys(bestTVShowsByGenre)

for (let element of ObjArray){
  if (bestTVShowsByGenre.element === value)
    return element;
  
}

}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

