function reverseString(array){
  let words = [] ;
  for (let i=array.length; i >= 0; i--){
    words += array[i];
    }
    return words;
  }
    console.log(reverseString("hello goodbye"));
    console.log(reverseString("1 fish 2 fish"));


  