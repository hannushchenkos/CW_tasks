// UEFA EURO 2016 - https://www.codewars.com/kata/57613fb1033d766171000d60/

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){
  return `At match ${teams[0]} - ${teams[1]}, ${scores.every(item => item === scores[0]) ?
    'teams played draw.' : teams[scores.indexOf(Math.max(...scores))]+' won!'}`
}