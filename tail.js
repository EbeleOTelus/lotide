const assertEqual = function(actual, expected){
  if  (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if  (actual !== expected){
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);

  }
};
function tail(results){

  let tail_X = results.slice(1);
  return tail_X;
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 