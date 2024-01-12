// Encrypt this! - https://www.codewars.com/kata/5848565e273af816fb000449

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.


var encryptThis = function(text) {
    return text.split(' ')
      .map(word => 
           word.split('').map((letter,index,array)=> {
              if(index === 0){letter = letter.charCodeAt(0)}
              else if(index === 1){
                let temp = letter;
                letter = array[array.length-1]
                array[array.length-1] = temp;
              }
          return letter;
      }).join('')).join(' ')
  }
    
  
  const encryptThis = text => text
    .split(' ')
    .map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, word.charCodeAt(0)))
    .join(' ');
  
  
  const encryptThis = text =>
    text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
      word.charCodeAt(0) + b + mid + a);
  
  const encryptThis = str => str.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (a,b,c,d) => a.charCodeAt() + d + c + b);