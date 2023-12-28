// Return the day - https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/

// Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
  return num < 8 && num > 0 ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num-1] : 'Wrong, please enter a number between 1 and 7';
}

function whatday(num) { 
 let res = 'day'
 switch(num){
     default: res = 'Wrong, please enter a number between 1 and 7'; break;
     case 1: res = 'Sunday'; break;
     case 2: res = 'Monday'; break;
     case 3: res = 'Tuesday'; break;
     case 4: res = 'Wednesday'; break;
     case 5: res = 'Thursday'; break;
     case 6: res = 'Friday'; break;
     case 7: res = 'Saturday'; break;
 }
 return res; 
}


function whatday(num) { 
 var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}


function whatday(num) { 
 let days = {
   1: 'Sunday',
   2: 'Monday',
   3: 'Tuesday',
   4: 'Wednesday',
   5: 'Thursday',
   6: 'Friday',
   7: 'Saturday'
 }
 return days[ num ] || 'Wrong, please enter a number between 1 and 7';
}

