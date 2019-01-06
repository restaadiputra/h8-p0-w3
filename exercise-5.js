function palindrome(kata) {
  for(var i = 0; i < (kata.length) / 2; i++) {
    if(kata[i] !== kata[kata.length - 1 - i]) {
      return false;
    }
  } return true;
}

// another answer using recursive
function alt_palindrome(kata) {
  if (kata.length === 0 || kata.length === 1) {
      return true;
  }

  if (kata[0] === kata[kata.length - 1]) {
      return alt_palindrome( kata.slice(1, kata.length - 1) );
  }
  
  return false; 
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false