// Form The Minimum - https://www.codewars.com/kata/5ac6932b2f317b96980000ca/

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 

function minValue(values){
    let strNumber = Array.from(new Set(values)).sort((a,b)=> a-b)
    console.log(strNumber)
//   console.log(strNumber[0])
    return strNumber.includes(0) ? +strNumber.toSpliced(2, 0, 0).join('') : +strNumber.join('')
//     if(strNumber.includes(0)){
//       console.log(strNumber.splice(0, 3, '4'))
//       return strNumber.splice(2, 0, 8)
//     }else{return +strNumber.join('')}
}


console.log(minValue([8, 0, 5, 3, 3, 3, 0, 7]))

// console.log([...'Hello'].splice(0, 1, 'h'));