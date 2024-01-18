// for..in and for..of - https://www.codewars.com/kata/5722b3f0bd5583cf44001000/

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

function giveMeFive(obj){
  let arr = []
  for(key in obj){
    if(key.length === 5 && obj[key].length === 5){
      arr.push(key);
      arr.push(obj[key])
    }else if(key.length !== 5 && obj[key].length === 5){
      arr.push(obj[key])
    }else if(key.length === 5 && obj[key].length !== 5){
      arr.push(key);
    }
  }
  console.log(arr)
  return arr;
}

function giveMeFive(obj){
  var five=[];
  for (var key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}
