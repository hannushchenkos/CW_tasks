// https://www.codewars.com/kata/563b662a59afc2b5120000c6/

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  console.log(p0, percent, aug, p)
  let years = 0; 
  while (p0 < p){
    p0 = p0 + (p0 * (percent* 0.01) + aug);
    years++;
//     console.log(years);
  }
console.log(p0, percent, aug, p)
return years;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));

// function nbYear(p0, percent, aug, p) {
//   var count = 0;
//   while (p0 < p) {
//     p0 = Math.floor((1 + percent / 100) * p0 + aug);
//     count++
//   } 
//   return count;
// }