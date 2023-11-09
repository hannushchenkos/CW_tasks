// Century of the input year - https://www.codewars.com/kata/52fb87703c1351ebd200081f

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{
  let result = Math.ceil(year/100)
  if(result < 10 || result > 20){
    switch(result%10){
        case(1): return result+'st'
        case(2): return result+'nd'
        case(3): return result+'rd'
        default: return result+'th'
    }
  }else{
    return result+'th'
  }
  
}

// function whatCentury(year)
// {
//   var century = Math.ceil(year/100);
//   return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
// }