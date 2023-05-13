//*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// Sam Harris => S.H

function abbrevName(name){
  return name.split(" ").map((item)=>{ return (item[0].toUpperCase()+'.')}).join("").slice(0,3)
}

/*===================*/
let res = abbrevName('Sam Harriss')
console.log(res)