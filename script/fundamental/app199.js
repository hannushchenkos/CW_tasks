// Integer as a string in Expanded Form - https://www.codewars.com/kata/5842df8ccbd22792a4000245/

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  return String(num).split('').reverse().map((item, index)=>item+'0'.repeat(index)).reverse().filter(item=> +item!==0).join(' + ')
}
