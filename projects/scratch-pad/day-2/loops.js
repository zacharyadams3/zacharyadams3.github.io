// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 
  for(var i=0; i<3;i++){
console.log(array[i]);
  }  
  // YOUR CODE ABOVE HERE //
}
 printArrayValues([1,2,3]);
 printArrayValues(["one","two","three"]);

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
 
  for(var i = array.length-1; i>=0 ;i--){
console.log(array[i]);
  }  
  // YOUR CODE ABOVE HERE //
}
 printArrayValuesInReverse([1,2,3]);
 printArrayValuesInReverse(["one","two","three"]);

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
  console.log(object[key]);
}
  // YOUR CODE ABOVE HERE //
}
 /* var alpha = {
   one: 'one',
   two: 'two',
   three: 'three'
  };
  var beta = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
   }; 
   */
printObjectValues({one: 'one', two: 'two', three: 'three'});
printObjectValues({one: 1, two: 2, three: 3, four: 4});



/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) {
  array.push(key);
}
  return array;
  // YOUR CODE ABOVE HERE //
}

getObjectKeys({one: 'one', two: 'two', three: 'three'});
getObjectKeys({one: 1, two: 2, three: 3, four: 4});

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
  console.log(key);
}
  // YOUR CODE ABOVE HERE //
}

printObjectKeys({one: 'one', two: 'two', three: 'three'});
printObjectKeys({one: 1, two: 2, three: 3, four: 4});


/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {

  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) {
    array.unshift (object[key]);
  }  
  return(array.length);
  
  // YOUR CODE ABOVE HERE //
}
getObjectLength({one: 'one', two: 'two', three: 'three'});
getObjectLength({one: 1, two: 2, three: 3, four: 4});

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {

  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) {
  array.unshift (object[key]);
}
  for(var i=0; i<array.length; i++){
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}
printObjectValuesInReverse({one: 'one', two: 'two', three: 'three'});
printObjectValuesInReverse({one: 1, two: 2, three: 3, four: 4});
// I adapted an idea that I found in Stack Overflow.




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}