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

const letterPositions = function(strings){
  let y = strings.split(" ").join("");
 let answer = {}
 let array=[]
for (let i = 0; i < y.length; i++){
  if (answer.hasOwnProperty(i)){
    answer[i] = array.push(i)
  }
}
return answer;
}

assertArraysEqual(letterPositions("hello"), [1]);


module.exports = letterPositions;

