// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str) => str.split(" ").map(word => word.split("").reverse().join("")).join(" ")

// var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

console.log(reverseWords('Let it snow!'));

git commit -am "update(fundamentals:added app69.js):Reverse every word of the string"
