// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

// Complete the function/method so that it returns the url with anything after the anchor (#) removed. 

// function removeUrlAnchor(url){
//   return url.split("#")[0]
// }

function removeUrlAnchor(url){
  return url.replace(/\#.*$/g, '')
}

// function removeUrlAnchor(url){
//   // TODO: complete
//   return url.replace(/#.*/gi,"");
// }