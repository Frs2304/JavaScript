// Practice Set 4 - Q2
// Include function
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)