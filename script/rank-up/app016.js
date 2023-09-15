// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function isBigEnough(element, index, array) {
  return element !== 0;
}

function deleteNth(arr,n){
  let counterArr = [];
  const set = new Set(arr);
  set.forEach((setItem,index) => {
    let counter = 0;
    arr.forEach(arrItem => {
      if(arrItem === setItem){
        counter++
      }
    })
    counterArr.push(counter-n);
    })

    arr.reverse();
    while (!counterArr.every(isBigEnough)) {
      counterArr.forEach((item, index)=> {
        if(counterArr[index] > 0){
          // arr[arr.indexOf(set[index])] = null;
          counterArr[index] = item - 1;
          
          console.log(counterArr[index]);
        }
        console.log();
      })
      console.log(counterArr);
    }

    console.log(set);
    console.log(counterArr);

    
    return arr;
}

  console.log(deleteNth([20,37,20,21,20], 1));