//*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//*It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    let arr = a;
    let nullIndex = null;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < b.length; i++) {
            arr[j] === b[i] ? arr[j] = null : arr[j] = arr[j];
        }
        if(arr[j] === null){
            nullIndex = arr.findIndex((item)=>{
                return item === null;
            });
            arr.splice(nullIndex, 1)
            nullIndex = null;
            j--;
        }
    }
    
    return a;
}

//!better function
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }



//======//
let res = arrayDiff([18,-17,-20,-14,16,-18,0,7,20,6,-11,-13],[18,-17])
console.log(res)