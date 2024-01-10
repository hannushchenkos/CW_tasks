// You only need one - https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

function check(a,x){return a.includes(x)};

check=(a,x)=>a.some(v=>v==x)

check = (a,x) => a.indexOf(x) >= 0

const check = (a,x) => RegExp('\\b'+x+'\\b').test(a.join(','));
