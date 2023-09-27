// https://www.codewars.com/kata/5761a717780f8950ce001473/

// was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

let calculateAge = (b, n) => b === n ? 'You were born this very year!' 
  : n - b === 1 ? 'You are 1 year old.' 
  : n - b === -1 ? 'You will be born in 1 year.' 
  : n < b ? `You will be born in ${b - n} years.` 
  : `You are ${n - b} years old.`


//var  calculateAge=(b,c)=>{
//  r = c-b;
//  switch(true) {
//    case (r>1):    return "You are " + r + " years old."; break;
//    case (r===1):  return "You are 1 year old."; break;
//    case (r===0):  return "You were born this very year!"; break;
//    case (r===-1): return "You will be born in 1 year."; break;
//   case (r<-1):   return "You will be born in " + (-r) + " years."; break;
//  }
//}

//function  calculateAge(y1,y2) {
//  var dif = y2 - y1;
//  var s = Math.abs(dif) === 1 ? "" : "s";
//  return dif > 0 ? You are ${dif} year${s} old. : ( dif < 0 ? You will be born in ${Math.abs(dif)} year${s}. : `You were born this very year!`);
//}
