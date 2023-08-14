// https://www.codewars.com/kata/56170e844da7c6f647000063/

//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

let peopleWithAgeDrink = (age) =>  age < 14 ? 'drink toddy' : age < 18 ? 'drink coke' : age < 21 ? 'drink beer' : 'drink whisky'

//const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')