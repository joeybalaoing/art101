/* Authors: Sonia Ellis & Joey Balaoing
 * Created: 10/26/21
 * License: Public Domain
*/

// function that adds elements
function add(x) {
  return (x + 2);
}

// function that checks if number is even or odd
function isEven(x){
  return (x % 2 == 0);
}

// testing even true or false
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

// array
array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array:", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(add);
// should return [102, 83, 6, 18, 44, 146, 10002]
console.log("Array should add 2 to each element in the array:", result);

var result = array.map(function(x){
  return x - 4;
})
// should return [96, 77, 0, 12, 38, 140, 9996]
console.log("Numbers in the array subtracted by 4:", result);
