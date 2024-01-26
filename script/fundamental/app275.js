// esreveR - https://www.codewars.com/kata/5413759479ba273f8100003d/

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)


// let modArray = [];
let reverse = function(array) {
  let modArr = []
  function closure(){
    modArr.push(array.pop())
  }
  while(array.length > 0){
    closure()
    console.log(array.length)
  }
return modArr
}

reverse = function(array) {
  return array.reduceRight(function(a, v){ return a.push(v), a }, []);
}


function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}


reverse = function(array) {
  return array.map((c, i) => array[array.length - 1 - i]);
}
