function angkaPalindrome(num) {
  var found = false;

  while(!found) {
    num++;
    found = true;
    var strNum = num.toString()
  
    for(var i = 0; i < (strNum.length) / 2; i++) {
      if(strNum[i] !== strNum[strNum.length - 1 - i]) {
        found = false;
        break;
      }
    } 
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001