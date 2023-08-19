// https://www.codewars.com/kata/583203e6eb35d7980400002a/

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array

// function countSmileys(arr) {
//     return arr.reduce((acc, cur)=>{ (/(^[:;])?.([D)]$)/gm).test(cur) ? acc += 1 : acc}, 0);
//   }

function countSmileys(arr) {
    let result = 0;
    arr.forEach(item => {
        if (item.match(/((^[:;])[-~]?([D)]$))/gm)) {
            console.log(item + ' - yes');
            result++;
        }else{
            console.log(item + ' - no');
        }
    });
    return result;
  }

//   function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }


// const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


// const SMILING = /[:;]{1}[-~]?[)D]{1}/;
// const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;


// let countSmileys=arr=> arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length; 

  console.log(countSmileys([":-)" , ";~D" , ":D" , ":_D"]));
  console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"]));