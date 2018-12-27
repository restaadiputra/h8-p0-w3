function groupAnimals(animals) {
  var arrayGroup = [];
  var animalOrder = [];
  
  // create list of fist letter from every animal in array 
  for(var i = 0; i < animals.length; i++) {
    if(animalOrder.indexOf(animals[i][0]) === -1) {
      animalOrder.push(animals[i][0])
    }
  }
  animalOrder = animalOrder.sort(); // sort the list
  
  // push animal based on first letter list of animal on the list
  for(var i = 0; i < animalOrder.length; i++) {
    arrayGroup.push([]);
    for (var j = 0; j < animals.length; j++) {
      if(animals[j][0] === animalOrder[i]) {
        arrayGroup[i].push(animals[j]);
      }
    }
  }
  return arrayGroup;
}

// Another Answer

function groupAnimals2(animals) {
  var arrayGroup = [];
  var counter = 0;
  animals.sort(); // sort the animals array
  var letter = animals[0][0]; // set the first item's first letter in array as first alphabet  
  
  for(var i = 0; i < animals.length; i++) {
    // if group array is empty, create and push item 
    if (arrayGroup.length === 0) {
      arrayGroup.push([animals[i]]);
    }
    // if group already exists for that letter, just push it
    else if(animals[i][0] === letter) {
      arrayGroup[counter].push(animals[i]);
    } 
    
    // if group letter is not exists, create and push the animal item
    else {
      counter++;
      letter = animals[i][0]
      arrayGroup.push([animals[i]]);
    }
  }
  return arrayGroup;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]