function pasanganTerbesar(num) {
  var biggestNum = 0;
  num = num.toString();

  for(var i = 0; i < num.length; i++) {
    if (biggestNum < parseInt(num.substr(i, 2))) {
     biggestNum = parseInt(num.substr(i, 2))
    }
  }
  return biggestNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99