//*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//*Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//97 - 122
// function isPangram(str){
//     str.split("").every((item, index)=>{
//         return item.charCodeAt(index) > 96 && item.charCodeAt(index) < 123;
//     })
// }

// function isPangram(str){
//     let arr = str.toLowerCase().split(" ").join("").split("");
//     console.log(arr);
//     let result = arr.every((item, index)=>{
//         console.log(item);
//         if (item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123) {
//             return true;
//         }else{
//             return false;
//         }
//     })
//     return result;
// }

function isPangram(str){
    let arrSet = new Set();
    let result = null;
    let arr = str.toLowerCase().split(" ").join("").split("");
    console.log(arrSet);
    arr.forEach(item => {
        if (item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123) {
            arrSet.add(item);
        }
    });
    return arrSet.size === 26 ? true : false; 

}

//! function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

//! function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
// }


//======//
// let res = isPangram('ABC')
let res = isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')
console.log(res)