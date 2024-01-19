// Remove all exclamation marks from the end of sentence - https://www.codewars.com/kata/57faece99610ced690000165/

function remove (string) {  
  return string.replace(/!+$/gi, '');
}

function remove(s){
  //coding and coding....
  while (s[s.length - 1] === '!') {
    s = s.slice(0, -1);
  }
  return s;
}

