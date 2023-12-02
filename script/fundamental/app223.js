// Sum of angles - https://www.codewars.com/kata/5a03b3f6a1c9040084001765/

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// function angle(n) {
//   switch(n){
//       case 3: return 180;
//       case 4: return 360;
//       case 5: return 540;
//       case 7: return 900;
//   }
// }

function angle(n) {
  return (n-2)*180
}

