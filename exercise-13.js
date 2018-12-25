function targetTerdekat(arr) {
  var dist = 0;
  var posX = -1;
  var posO = -1;
  var curr = '';


  for(var i = 0; i < arr.length; i++) {
    // set current position to either 'x' or 'o'
    // if the loop reach one of them
    if(arr[i] === 'x') {
      posX = i;
      curr = 'x';
    } else if(arr[i] === 'o') {
      posO = i;
      curr = 'o';
    }

    // if the position both 'x' and 'o' already fill calculate the distance 
    if(posX !== -1 && posO !== -1) {
      // if dist === 0 or higher than current distance, set distance to current distance
      var currDist = Math.abs(posX - posO);
      if(dist === 0 || dist > currDist) {
        dist = currDist;
      } 
      // set either one of them to -1 for whichever found first, this will reset their position
      if(curr === 'x') {
        posO = -1;
      } else {
        posX = -1;
      }
    }
  }
  return dist;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 2