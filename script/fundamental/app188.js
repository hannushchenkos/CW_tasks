// Replace all vowel to exclamation mark - https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

let replace = (s) => s.replace(/[AEIOU]/gi, '!')

// let replace = (s) => s.split('A').join('!').split('E').join('!').split('I').join('!').split('O').join('!').split('U').join('!')
// .split('a').join('!').split('e').join('!').split('i').join('!').split('o').join('!').split('u').join('!')

// let replace = (s) => s.split('').map(letter => 'AEIOUaeiou'.includes(letter) ? '!' : letter).join('')
