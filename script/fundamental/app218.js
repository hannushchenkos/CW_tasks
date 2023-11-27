// String incrementer - https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (str) {
  let result = str;
  if(!!str.match(/\d+$/)){
    let left = str.slice(0, str.match(/\d+$/)[0].length*-1)
    let right = str.match(/\d+$/)[0].split('').reverse()
    for(let i = 0; i < right.length; i++){
      if(i === 0){right[i]++}
      if(right[i]>9){
        right[i] = 0; 
        right[i+1] = +right[i+1] + 1;
      }
    }
    console.log(result)
    right = right.reverse().join('').replace('NaN', '1')
    result = [left, right].join('')
  }else{
//     console.log(result)
    result = result +'1'
  }
  return result; 
}

// function incrementString(input) {
//   if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//   return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }

// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

// const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));

// function incrementString(input) {
//   return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//       return +d + 1 + ns.replace(/9/g, '0');
//     });
// }

// function incrementString(str){
// 	var c = str[str.length-1];
// 		switch(c){
//             case '0':
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
//             case '9': return incrementString(str.substring(0, str.length-1)) + 0;
//             default: return str+"1";
//                 }
// }

// function incrementString (strng) {
//   return strng.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));

// }

// const incrementString = strng =>
//   strng.replace(/[0-8]?9*$/, val => ++val);

// function incrementString(input) {
//   return input.replace(/\d*$/, function(n) {
//     var x = ~~n + 1
//     return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
//   })
// }

// function incrementString (strng) {
//   return strng.replace(/(\d*)$/, (_, p1) => p1 ? String(+p1 + 1).padStart(p1.length, 0) : 1);
// }

// const incrementString = s => s.replace(/[0-8]?9*$/, m => ++m);