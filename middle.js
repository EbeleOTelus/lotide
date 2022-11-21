// function eqArrays(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {

//       return false;
//     }

//   }
//   return true;
// }

// function assertArraysEqual(array1, array2) {
//   let equalLength = array1.length === array2.length;
//   let result = true;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i])

//       result = false;
//   }
//   if (result && equalLength) {
//     console.log('Good job!');
//   }
//   else {
//     console.log('Not the same');
//   }
// }



function middle(array) {
  
  let result = [];
  // for (i = 0; i < array.length; i++) {
    let x;
    if (array.length % 2 === 1) {
      x = (array.length + 1) / 2;
      result.push(array[x-1]);
    }

    if (array.length % 2 === 0) {
      let y = array.length / 2;
      result.push(array[y-1], array[y]);

    }
  // }
  return result;
}


module.exports = middle;





