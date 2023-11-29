// Simple calculator - https://www.codewars.com/kata/5810085c533d69f4980001cf

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"



JavaScript

function calculator(a,b,sign){
  if(Number.isInteger(a + b)){
    switch(sign){
      case '+': return a + b; break;
      case '-': return a - b; break;
      case '*': return a * b; break;
      case '/': return a / b; break;
      default: return 'unknown value'
    }
  }else{
    return 'unknown value'
  }
  
}

// function calculator(a,b,sign) {
//   try
//     { return eval(a+sign+b); }
//   catch(e)
//     { return "unknown value"; }
// }

// function calculator(a,b,sign){
// 	var oper = {
// 		"+": a + b,
// 		"-": a - b,
// 		"*": a * b,
// 		"/": a / b
// 	}
// 	return oper[sign] ? oper[sign] : "unknown value"
// }