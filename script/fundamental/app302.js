// Simple string characters - https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


function solve(s){
  //   console.log(s, '||', upp, low, num, spec)
    console.log(s, '||')
    let upp = s.match(/[A-Z]/g) !== null ? s.match(/[A-Z]/g).length : 0
    let low = s.match(/[a-z]/g) !== null ? s.match(/[a-z]/g).length : 0
    let num = s.match(/[0-9]/g) !== null ? s.match(/[0-9]/g).length : 0
    let spec = s === '' ? 0 : s.length - upp - low - num
    return s == "" ? [0,0,0,0] : [upp, low, num, spec]
  }
  
  
  
  const solve = x => {
    let u = x.match(/[A-Z]/g)||[]
    let d = x.match(/[a-z]/g)||[]
    let n = x.match(/[0-9]/g)||[]
    let s = x.match(/[^A-Z0-9]/gi)||[]
    return [u.length, d.length, n.length, s.length]
  }
  
  function solve(s){
   return [
     s.split("").filter(el => /[A-Z]/.test(el)).length,
     s.split("").filter(el => /[a-z]/.test(el)).length,
     s.split("").filter(el => /\d/.test(el)).length,
     s.split("").filter(el => /[^A-Za-z0-9]/.test(el)).length
   ]
  }
  