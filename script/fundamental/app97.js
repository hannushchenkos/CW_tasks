// https://www.codewars.com/kata/55a5bfaa756cfede78000026/

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

let problem = (x) => (typeof x === 'number') ? x * 50 + 6 : 'Error';

// ================ 


function problem(x){
    Number.isFinite(x) ? x * 50 + 6 : "Error";
}

function problem(x){
    return /\d/g.test(x) ? x*50 + 6 : "Error"
}

console.log(problem(6));