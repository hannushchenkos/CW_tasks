// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

let highAndLow = (numbers) => `${Math.max(...(numbers.split(" ")))} ${Math.min(...(numbers.split(" ")))}`

console.log(highAndLow('5 -3 -2 -1 7 9'))