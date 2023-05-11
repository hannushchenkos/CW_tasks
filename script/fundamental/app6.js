//* //*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

function addBinary(a,b) {
    let sum = a + b;
    let result = [];
    
    while(sum > 0){
      result.unshift(sum % 2);
      sum = Math.floor(sum / 2)
    }
    return result.join("");
}
  
/*!===================*/
  
// function addBinary(a,b){
//   return (a+b).toString(2)
// }
  
/*===================*/
let res = addBinary(1,6)
console.log(res)