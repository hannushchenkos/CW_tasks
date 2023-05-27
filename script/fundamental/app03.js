//* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let array = [];
  while (n>0){
    array.push(n%10);
    n = (n - n%10) / 10;
  }
  return array.length===0 ? array = [n]: array;
}

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

//======//

let res = digitize(-5)
console.log(res)