// Maximum Triplet Sum - https://www.codewars.com/kata/5aa1bcda373c2eb596000112/

function maxTriSum(numbers){
  return Array.from(new Set(numbers)).sort((a,b)=>b-a).slice(0,3).reduce((acc,cur)=>acc+=cur, 0)
}

const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}
