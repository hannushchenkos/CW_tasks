// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number){
    switch(number){
        case 0: return 'Zero'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
    }
}
  
// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
  
// const switchItUp = N => N == 1 ? 'One' : N == 2 ? 'Two' : N == 3 ? 'Three' : N == 4 ? 'Four' : N == 5 ? 'Five' : N == 6 ? 'Six' : N == 7 ? 'Seven' : N == 8 ? 'Eight' : N == 9 ? 'Nine' : 'Zero'

console.log(shortcut(5));
