// Odd-Even String Sort - https://www.codewars.com/kata/580755730b5a77650500010c/

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

String.prototype.customSort = function(par){
    let upd = [...this].filter((item, idx)=> idx%2 === par).join('')
    // console.log(upd)
    return upd;
  }
  
  function sortMyString(S) {
      return [S.customSort(0), S.customSort(1)].join(' ');
  }


console.log(sortMyString('6NAdKdODG1rBtY88elxroXs9vr27pbjouNduHYUmGQ5BTHC'));