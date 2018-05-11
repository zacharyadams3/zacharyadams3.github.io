/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//var animals = animals.data.js;
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            return animals[i];
        } 
    }return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals[i] = replacement;
        }
    }    
}
// replace(animals, 'Jerome', {name: 'Chip', species: "Chipmunk"});

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i,1);
        }
    }
}
// remove(animals, "Billy");


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    for(var i = 0; i < animals.length; i++){
        if(animal.name.length === 0){
            return false;
        }else if(animal.species === undefined){
            return false;
        }else if(animal.name === animals[i].name){
            return false;
        //}else{
            
        }
    }animals.push(animal);
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
