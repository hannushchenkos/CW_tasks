// Tip Calculator - https://www.codewars.com/kata/56598d8076ee7a0759000087/

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%


function calculateTip(amount, rating) {
  let oneStar = amount/20;
  switch(rating.toLowerCase()){
      case 'terrible': return 0
      case 'poor': return Math.ceil(oneStar)
      case 'good': return Math.ceil(oneStar * 2)
      case 'great': return Math.ceil(oneStar * 3)
      case 'excellent': return Math.ceil(oneStar * 4)
      
      default: return "Rating not recognised"
  }
}


const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};