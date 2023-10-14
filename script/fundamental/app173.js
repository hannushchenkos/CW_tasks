// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

function stairsIn20(s){
  return s.reduce((acc, cur) => acc += cur.reduce((acc2, cur2)=> acc2 += cur2, 0), 0) * 20
}

const stairsIn20 = s => s.flat().reduce((p,c)=> p+c ,0)*20

function stairsIn20(s){
   var arr = [].concat(...s)
   var newArr = [].concat(...arr)
   return newArr.reduce((a, b) => a+b)*20
}
