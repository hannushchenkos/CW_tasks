// Parts of a list - https://www.codewars.com/kata/56f3a1e899b386da78000732

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
  let startArr = arr.map((item, index) => [...arr].splice(0, index+1).join(' ')).slice(0, -1)
  let endArr = arr.map((item, index) => [...arr].reverse().splice(0, index+1).reverse().join(' ')).slice(0, -1).reverse()
  return startArr.map((item, index)=>[item, endArr[index]]);
}

var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)