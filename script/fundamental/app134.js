// https://www.codewars.com/kata/566fc12495810954b1000030/

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  let arr = [];
  while(n>=0){
    arr.push(n*n)
    n--;
  }
  console.log(arr);
  let occ = 0;
  arr.forEach(number => {
      console.log(number);
      (number+'').split("").forEach(symbol => {
        +symbol === +d ? occ+=1 : occ;
        console.log(occ);
      })
  })
  console.log(occ);
  return occ;
}


function nbDig(n, d) {
  let arr = [];
  while(n>=0){
    arr.push(n*n)
    n--;
  }
  let occ = 0;
  arr.forEach(number => {
      console.log(number);
      occ = occ + ((''+number).split(''+d).length - 1);
  })
  console.log(occ);
  return occ;
}
