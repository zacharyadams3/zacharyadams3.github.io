//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object){
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    for (var key in object){
        array.push(key);
    }
  return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    for (var key in object){
        /** you want to check the type of the value right? try (typeof object[key] === "string") */
        //Thanks
        if(typeof object[key] === "string")
        array.push(object[key]);
    }
  return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
     if(Array.isArray(collection)){
    return "array";
  }   
  if(typeof collection === "object"){
      return "object";
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var stringy = string.replace(string.charAt(0), string.charAt(0).toUpperCase());
    return stringy;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var arr = string.split(" ");
  var array = [];
  for( var i = 0; i < arr.length; i++) {
    var stringy = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());    
    array.push(stringy);
  }
  var str = array.join(" ");
  return str;    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var n = object.name;
    var name = n.replace(n.charAt(0), n.charAt(0).toUpperCase());
    return 'Welcome ' + name + "!";
}
welcomeMessage({name: 'Joe'});
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  var n = object.name;
  var name = n.replace(n.charAt(0), n.charAt(0).toUpperCase());
  var s = object.species;
  var species = s.replace(s.charAt(0), s.charAt(0).toUpperCase());
  return name + ' is a ' + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 if(object.noises === undefined || object.noises === null){
   return 'there are no noises';
 }
  if(object.noises[0] === undefined || object.noises[0] === null){
    return 'there are no noises';
  }
  if(object.noises[0] !== undefined || null){
      var arr_str = object.noises.toString();
      var str = arr_str.replace(/,/g, " ");
    return str;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  if(string.search(word) === -1){
    return false;
  }else{
    return true;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if(object.friends === undefined){
    return false;
  }
  for(var i = 0; i < object.friends.length; i++){
    if(object.friends[i] === name){
      return true;
    }
  }
    
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var arr = [];
    for(var i = 0; i < array.length; i++){
      var str = array[i].friends.join(' ');

      if(str.search(name) === -1){
        arr.push(array[i].name);
      }

      if(array[i].name === name){
        arr.pop(array[i]);
      }
    }
  return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  /** Aren't you performing the same action in the if statement as outside the if statement? I don't think you need an if here*/
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  // to remove a property you must use the delete keyword - look it up!
    for(var key in object){
    if(array.includes(key)){
        delete object[key];
     }
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  
  /** Hey Zachary, I like this but i'm not sure  your sort function is going to work the way you'd like
  
  Is there a way that we could only add elements to arr that have not been added to it already? How 
  could we know whether or not an element has already been added to arr?
  
  */
  /**var arr = [];
  	array.sort();
    array.sort(function(a, b){return a - b});
  
  for(var i = 0; i < array.length; i++){
    if(array[i] != array[i+1]){
      arr.push(array[i]);
    }
  }
  return arr;**/
  
  var arr = [];
  for(var i = 0; i < array.length; i++){
     var arg = arr.join(" ");
      if(arg.search(array[i]) === -1){
        arr.push(array[i]);
      }
  }
  return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}