// [0, 0, 1, 1, 1, 1, 0] => [0, 0, 4, 0]

let ex1 = [0, 0, 1, 1, 1, 1, 0]
let ex2 = [0, 0, 0, 1, 1]
let ex3 = [0, 1, 0, 1, 1, 0, 1]

let countOnes = (arr) => {
  return arr.map((item, index)=> {
    if(arr[index] < arr.length){
      switch (item) {
        case 0: return 0; break;
        default: if(arr[index+1] != 0){
          arr[index+1] = arr[index+1] + item; item = null; 
        }
        return item; break;
      }
    }
  }).filter(item => item != null);
}

console.log(ex1);
console.log(countOnes(ex1));
console.log('====================');
console.log(ex2);
console.log(countOnes(ex2));
console.log('====================');
console.log(ex3);
console.log(countOnes(ex3));