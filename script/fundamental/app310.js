// Sort Out The Men From Boys - https://www.codewars.com/kata/5af15a37de4c7f223e00012d/

// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd
let removeDuplicates = (item) => Array.from(new Set(item))

function menFromBoys(arr){
  console.log(arr)
  let men = removeDuplicates([...arr].filter((num,idx)=>num%2===0).sort((a,b)=>a-b))
  let boys = removeDuplicates([...arr].filter((num,idx)=>num%2===1 || num%2===-1).sort((a,b)=>b-a))
  return men.concat(boys)
}


function menFromBoys(a){
  a = [...new Set(a)];
  let m = a.filter((x) => x%2 === 0).sort((a, b) => a-b);
  let b = a.filter((x) => x%2 !== 0).sort((a, b) => b-a);
  return [...m, ...b];
}