//*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//* Example: 'abc' => ['ab', 'c_']

function solution(str){
    let arr = str.split("");
    let modArr = [];
    let firstArr = arr.filter((item, index)=>{
      return index % 2 === 0;
    })
     let secondArr = arr.filter((item, index)=>{
      return index % 2 === 1;
    })
    let bobo = true;
    while(bobo === true){
      if(firstArr.length> 0 && secondArr.length> 0){
        modArr.push(`${firstArr.shift()}${secondArr.shift()}`)
      }else if(firstArr.length>0 && secondArr.length === 0){
        modArr.push(`${firstArr.shift()}_`)
      }else{
        bobo = false;
      }
    }
     return modArr;
  }

/*===================*/
let res = solution('abc')
console.log(res)