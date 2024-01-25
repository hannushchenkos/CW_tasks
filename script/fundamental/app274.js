// Title Case - https://www.codewars.com/kata/5202ef17a402dd033c000009

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

function titleCase(title, minorWords) {
  const vocabulary = minorWords == undefined ? '' : minorWords.toLowerCase().split(' ')
//   console.log(vocabulary)
  return title == '' ? '' : title.toLowerCase().split(' ')
    .map((item, idx)=>vocabulary.indexOf(item)   === -1 || idx === 0 ? 
         item[0].toUpperCase()+item.slice(1) : item).join(' ')
}


function titleCase(title, minorWords) {
  const capitalize = (w) => w.toLowerCase().replace(/^[a-z]/, (m) => m.toUpperCase());
  const isInMinor = (w) => minorWords.match( new RegExp('\\b' + w + '\\b', 'i'))==
      null;
  return title.split(' ')
    .map((w, i) => !minorWords || isInMinor(w) || i === 0 ? capitalize(w) : w.toLowerCase())
    .join(' ');
}
