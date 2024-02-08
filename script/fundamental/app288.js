// Kebabize - https://www.codewars.com/kata/57f8ff867a28db569e000c4a/

// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
  return str.replace(/\d/,'').match(/.[a-z]*/g).map(item => item.toLowerCase()).join('-')
}


function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}


function kebabize(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
}


function kebabize(str) {

  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();

}