// https://www.codewars.com/kata/570a6a46455d08ff8d001002/

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway



function noBoringZeros(n) {
    let arr = String(n).split("").reverse()
    console.log(arr);
    while(arr[0] == 0){
        arr.shift()
    }
    return +arr.reverse().join("");
}

// function noBoringZeros(n) {
    
//     let arr = String(n).split("")
//     console.log(arr);
//     while(arr[arr.length-1] == 0){
//         arr.pop()
//     }
//     return +arr.join("");
// }

// function noBoringZeros(n) {
//     while(n%10==0){
//         n = n / 10
//     }
//     return n;
// }

//! function noBoringZeros(n) {
//!     return +`${n}`.replace(/0*$/, "");
//!   }

//! function noBoringZeros(n) {
//!     return Number(String(n).replace(/0+$/,''));
//!   }

console.log(noBoringZeros(1050));