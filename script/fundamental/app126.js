// https://www.codewars.com/kata/539de388a540db7fec000642
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   const months = {
//     'January': 1,
//     'Fabruary': 2,
//     'March': 3,
//     'April': 4,
//     'May': 5,
//     'June': 6,
//     'July': 7,
//     'August': 8,
//     'September': 9,
//     'October': 10,
//     'November': 11,
//     'December': 12    
//   }
  
//   let updCur = currentDate.split(',').join('').split(' ')
//   let updExp = expirationDate.split(',').join('').split(' ')
//   console.log(updCur);
//   console.log(updExp);

  
//   let validCode = enteredCode === correctCode
//   let validYearAndMonth = updCur[2] < updExp[2] ? true : months[updCur[0]] < months[updExp[0]] ? true : updCur[1] < updExp[1] ? true : false;

//   let logic = validCode && validYearAndMonth
  
//   return logic;
// }


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

  const currentDateNum = Date.parse(currentDate)
  const expirationDateNum = Date.parse(expirationDate)

  console.log(currentDate);
  console.log(currentDateNum);
  console.log(expirationDate);
  console.log(expirationDateNum);

  let validCode = enteredCode === correctCode
  let validDate = currentDateNum <= expirationDateNum

  let logic = validCode && validDate
  
  return logic;
}




// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
// console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123','123','September 5, 2014','September 6, 2014'));
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));

// const monthMap = ["January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December"];

// const getDate=(dateStr)=>{
//   let [dateMonth,year] = dateStr.split(", ");
//   let [month,date] = dateMonth.split(" ");
//   month = monthMap.indexOf(month);
//   year = parseInt(year);
//   date = parseInt(date);
//   return [year,month,date];
// }

// const isNotExpired = (expireDate, curDate)=>{
//   if(expireDate[0]>curDate[0])return true;
//   if(expireDate[0]===curDate[0]&&expireDate[1]>curDate[1])return true;
//   if(expireDate[0]===curDate[0]&&expireDate[1]===curDate[1])return expireDate[2]>=curDate[2];
//   return false;
// }

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   if(!enteredCode||!correctCode||!(enteredCode === correctCode))return false;
//   let curDate = getDate(currentDate);
//   let expDate = getDate(expirationDate);
//   return isNotExpired(expDate,curDate);
// }