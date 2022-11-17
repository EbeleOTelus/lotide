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

const countLetters = function(strings){
let x = strings.split(" ").join("");
result = {};

for(const char of x){
  if (!result.hasOwnProperty(char)){
    result[char] = 1
  }
else{
  result[char] += 1

}

}

return result;
 }
 countLetters("lhl");
 console.log(countLetters("lhl"));

