// Decrypt this! - https://www.codewars.com/kata/581e014b55f2c52bb00000f8/

// You are given a secret message you need to decrypt. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

//     there are no special characters used, only letters and spaces
//     words are separated by a single space
//     there are no leading or trailing spaces

function decipherThis(str) {
  return str.split(' ').map((word)=>{
    let wordHead = String.fromCharCode(word.match(/\d+/g)[0]);
    let wordTail = word.match(/\D/g) || [];
  //   console.log(wordTail)
    let lastLetter = wordTail[0];
    switch(wordTail.length){
      case 0: wordHead; break;
      case 1: wordHead += wordTail.join(''); break;
      case 2: wordHead += wordTail[1] + lastLetter; break;
      default: wordHead += wordTail[wordTail.length-1] + wordTail.slice(1,wordTail.length-1).join('') + lastLetter; break;
    }
    return wordHead;
  }).join(' ')
}

console.log(decipherThis('116sih 97dn 115ee 104wo 121uo 100o'));
//? 'this and see how you do'

function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}

const decipherThis = str =>
str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);


