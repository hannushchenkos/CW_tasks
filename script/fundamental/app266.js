// Is it a number? - https://www.codewars.com/kata/57126304cdbf63c6770012bd/

function isDigit(s) {
  //   console.log(s, +(s.trim()), !isNaN(+(s.trim())))
    return !isNaN(+(s.trim()))
  }
  
  function isDigit(s) {
    return parseFloat(s) === Number(s)
  }
  
  const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);
  
  
  function isDigit(s) {
    return /^\-?\d+(\.\d+)?$/.test(s.trim());
  }
  