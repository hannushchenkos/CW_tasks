
// Moves in squared strings - https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/

// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.
//     Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
//     vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
//     Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

function vertMirror(str) {
  return str.split('\n').map(item=>item.split('').reverse().join('')).join('\n')
}

function horMirror(str) {
  return str.split('\n').reverse().join('\n')
}

function oper(fct, s) {
if(fct === vertMirror){return vertMirror(s)}
else if(fct === horMirror){return horMirror(s)}
else{return 'Error'}
}

//=========

const vertMirror = s => s.map(s => [...s].reverse().join(''));
const horMirror = s => s.reverse();

const oper = (fct, s) => fct(s.split("\n")).join("\n");


