// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://google.co.jp" -> domain name = "google"

function domainName(url){
    return url.replace(/http:\/\/|https:\/\/|www\./g, "").replace(/\.[^.]*$/g, "").replace(/\.[^.]*$/g, "").replace(/\.[^.]*$/g, "")
  }
  
//function domainName(url){
//  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
//}
  
//function domainName(url){
//  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
//}
  
//function domainName(url){
// return  url.replace('http://', '')
//      .replace('https://', '')
//      .replace('www.', '')
//        .split('.')[0];
//}

console.log(correct('http://google.co.jp'));