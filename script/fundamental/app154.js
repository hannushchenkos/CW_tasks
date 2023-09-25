// https://www.codewars.com/kata/59706036f6e5d1e22d000016

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


function wordsToMarks(string){
  return string.toLowerCase().split("").reduce((acc, cur)=>acc+cur.charCodeAt(0)-96, 0)
}

//const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

//function wordsToMarks(string){
//  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//  let marks = 0;
//  string.split('').forEach((char) => {
//    marks += alphabet.indexOf(char) + 1;
//  });
//  return marks;
//}
