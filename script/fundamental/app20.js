//Write a function that will filter array of words that starts with "Beg"-string.

function test(array){
  return array.filter((item)=>{
    return item.match(/^B.g\w*/gi)
  })
}

// function test(array){
//     let str = array.join(" ")
//     console.log(str)
//     let modStr = str.replace(/^B.g\w*/gi, '')
//     console.log(modStr)
//     return modStr;
// }
console.log(test(["Begin", "Brand", "Beg","Bag", "Big", "Letter", "Kid", "Begetarian", "Bro"]));