function balikString(word) {
  var reverseWord = '';
  for(var i = word.length -1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

console.log(balikString('hello world!'));

// or we can use recursive

function alt_balikString(word) {
  if (word.length === 1){
    return word;
  }
  return balikString2(word.substr(1)) + word[0];
}

console.log(balikString('hello world!'));
