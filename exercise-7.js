function hitungJumlahKata(kalimat) {
  return (kalimat.split(' ').length)
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


function hitungJumlahKata2(kalimat) {
  var newKalimat = kalimat.split(' ')

  if(newKalimat.length === 1) {
    return 1
  } else if(newKalimat.length === 0) {
    return 0
  } else{
    return 1 + hitungJumlahKata2(newKalimat.slice(1).join(' '))
  }
}

// TEST CASES
console.log(hitungJumlahKata2('I have a dream')); // 4
console.log(hitungJumlahKata2('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata2('A song to sing')); // 4
console.log(hitungJumlahKata2('I')); // 1
console.log(hitungJumlahKata2('I believe I can code')); // 5