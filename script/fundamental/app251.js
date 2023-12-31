// Shark Pontoon - https://www.codewars.com/kata/57e921d8b36340f1fd000059/

function shark(pDistance, sDistance, yourSpeed, sSpeed, dolphin){
  let sTime = dolphin ? (pDistance + sDistance) / sSpeed * 2 : (pDistance + sDistance) / sSpeed
  let yTime = pDistance / yourSpeed;
  console.log((sTime) + ' and ' + (yTime))
  return Math.floor(sTime) <= Math.floor(yTime) ? "Shark Bait!" : "Alive!"
}
