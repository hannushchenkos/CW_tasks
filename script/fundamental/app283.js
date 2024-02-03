//Automorphic Number - https://www.codewars.com/kata/5a58d889880385c2f40000aa/

//A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

function automorphic(n){
  const strN = `${n}` 
  const strPowN = `${n * n}` 
  console.log(strN, '||', strPowN)
  return strPowN.endsWith(strN) ? 'Automorphic' : 'Not!!'
//   let re = new RegExp(`/^.*(${n})+$/gm`) 
//   return re.test(strPowN) ? 'Automorphic' : 'Not!!'
}


const automorphic = n => RegExp(`${n}$`).test(n**2) ? "Automorphic" : "Not!!";