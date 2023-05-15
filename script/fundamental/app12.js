//* Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


function bmi(weight, height) {
  let res =  weight / Math.pow(height, 2)
  if (res <= 18.5){return "Underweight"}
  else if (res <= 25.0){return "Normal"}
  else if (res <= 30.0){return "Overweight"}
  else{return "Obese"};
}


// function bmi(weight, height) { 
//   var bmi  = weight/(height*height);
//   return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
// }

/*===================*/
let res = bmi(20, 15)
console.log(res)