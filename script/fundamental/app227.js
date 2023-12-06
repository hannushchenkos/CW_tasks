// Growth of a Population - https://www.codewars.com/kata/563b662a59afc2b5120000c6

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants ( number of inhabitants is an integer )

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

function nbYear(pStart, percent, aug, pFinal) {
  let years = 0;
  while(pStart < pFinal){
//    pStart = Math.floor(pStart + pStart * percent * 0.01 + aug); years++;
    pStart = ~~(pStart + pStart * percent * 0.01 + aug); years++;
  }
return years;
}

// function nbYear(p0, percent, aug, p) {
  
// for (var years = 0; p0 < p; years++) {
//   p0 = Math.floor(p0 + p0 * percent / 100 + aug);
// }
// return years
// }

// function nbYear(p0, percent, aug, p, years = 0) {
// if (p0 < p) {
//   return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
// }
// return years;
// }