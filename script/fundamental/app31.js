// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words){
  const regEx = /[1-9]/g
  let orderedWords = [];
  words.split(" ").forEach((word, index) => {
      console.log(word);
      let found = word.match(regEx)-1;
      orderedWords[found] = word;
  });
  return orderedWords.join(" ");
}

// const order = words => words.split(" ").sort((a,b) => a.match(/[*1-9]/g) - b.match(/[*1-9]/g)).join(" ")

console.log(order('is2 Thi1s T4est 3a'));