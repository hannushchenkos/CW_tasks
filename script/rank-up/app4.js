//* In this kata you are required to, given a string, replace every letter with its position in the alphabet. "a" = 1, "b" = 2, etc.

//* If anything in the text isn't a letter, ignore it and don't return it.

//* Example: "The sunset sets at twelve o' clock." Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
function alphabetPosition(text) {
  let modArrStr = text.toLowerCase().split("").filter((item)=>{
    return item.match(/([a-z])(?!.*\1)/ig)
  })
  // let alphaArr = []
  //97
  // for (let i = 97; i < 123;  i++) {
  //   alphaArr.push(String.fromCharCode(i));
  // }
  let finalStr = modArrStr.map((item)=>{
    return (item.charCodeAt(0)-96);
  }).join(" ")
  return finalStr;
}
//* 


/*===================*/
let res = alphabetPosition("abcTh4444444e sunset sets at twelve o' clock123.xyz")
console.log(res)