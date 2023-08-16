// https://www.codewars.com/kata/559ac78160f0be07c200005a
// Write a function that returns a string in which firstname is swapped with last name.

const nameShuffler = (str) => str.split(" ").reverse().join(" ")

const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

function nameShuffler(str){
  [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}