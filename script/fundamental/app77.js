//Create a function to check Fibonacci number

const fibArr = () => {
  arr = [0,1];
  for (i = 0; i<98; i++){
    arr.push(arr[i]+arr[i+1])
  }
  return arr;
}

function productFib(prod){
  let result = false;
  fibArr().forEach(item => {
    if(fibArr().indexOf(prod / item) !== -1){
      result = true;
    }
  });
  return result;
}

// console.log(fibArr());
console.log(productFib(4895)); // 55, 89, true