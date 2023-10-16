// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/

// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, '').length
}

