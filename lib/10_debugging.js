const capitalize = (word) => {
  // TODO : return capitalize word.
  // 1.take the first letter and upcase it
  const firstLetter = word[0].toUpperCase();
  console.log('firstLetter', firstLetter);
  console.log('name your variable or what you expect', variableName)
  // 2.take the resto of the string and downcase it
  const restWord = word.substring(1).toLowerCase();
  console.log('restWord', restWord);


  // 3.merge it together
  // return firstLetter + restWord; //concatenation
  return `${firstLetter}${restWord}`// interpolation
}

console.log(capitalize('HASSAN')); //=> 'Hassan'
console.log(capitalize('louis')); // => 'Louis'
