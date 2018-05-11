// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
        var greaterThanFunction = function(num) {
        return num > base;
    };
    return greaterThanFunction;
    // YOUR CODE ABOVE HERE //
 }
 var greaterThan2 = createGreaterThanFilter(2);
 console.log(greaterThan2(1));
 console.log(greaterThan2(3));

/*
var greaterThan5Filter = createGreaterThanFilter(5);

console.log(greaterThan5Filter(8)) //--> print true;
console.log(greaterThan5Filter(3)) //--> print false;
*/


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        var lessThanFunction = function(num) {
        return num < base;
    };
    return lessThanFunction;
  
    // YOUR CODE ABOVE HERE //
 }
 var lessThan2 = createLessThanFilter(2);
 console.log(lessThan2(1));
 console.log(lessThan2(3));

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
      var alpha = function(string){
          var str = string[0].toUpperCase();
          return str === startsWith.toUpperCase(); // you need to also make this upperCase in order to compare str with startWith! This will fix allStringsPass() too!
        };
    return alpha;   
    // YOUR CODE ABOVE HERE // 
    /**                                                 Thanks Mr.Spector! */
}
 var startsWithC = createStartsWithFilter();
 console.log(startsWithC('Carol'));
 console.log(startsWithC('carol'));
 console.log(startsWithC('David'));

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      var beta = function(string){
      var str = string.toLowerCase();
      var str2 = str[str.length-1];
      return str2 === endsWith;
    };
    return beta;   
    // YOUR CODE ABOVE HERE //
}
 var endsWith_k = createEndsWithFilter();
 console.log(endsWith_k('Dork'));
 console.log(endsWith_k('DORK'));
 console.log(endsWith_k('Dorky'));

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
  var array = [];
   for(var i = 0; i < strings.length; i++){
     array.push(modify(strings[i])); 
    }
   return array;
}
console.log(modifyStrings(['a', 'b', 'c'], function(string) { return string.toUpperCase(); }));
console.log(modifyStrings(['A', 'B', 'C'], function(string) { return string.toLowerCase(); }));

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
 for (var i = 0; i < strings.length; i++){
    if (test(strings[i]) === false){
      return false;
    }
  }
  return true;
}

    // YOUR CODE ABOVE HERE //

 function createStartsWithFilter2(string){
  if(string[0] === string){//"a"
    return true;
  }
  return false;
  }
  
  /*
  This function you've made is a filter. It doesn't make a filter like like the createStartsWithFilter() does
  it's okay that the example you have doesn't have a starts-with-"b" filter but i'm not sure why its failing
  ok. I have to go in a couple of minutes. If you have any suggestions, just leaves some notes and Ill check it later.
  thanks for the help.
  
  will do.
*/

// this isn't working because you're not passing in a function but a function call! you want to pass in the function itself!
console.log(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter2('a')));//'a'
console.log(allStringsPass(['aa', 'ba', 'abc'], createStartsWithFilter2('a')));//'a'
console.log(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter2('b')));//'b'



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}// don't edit this!