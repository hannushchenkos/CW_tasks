// Data Reverse - https://www.codewars.com/kata/569d488d61b812a0f7000015/


// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

function dataReverse(data) {
  let dataReversed = []
  while(data.length > 0){
    dataReversed.push(data.splice(0, 8))
  }
  return dataReversed.reverse().flat()
}

const dataReverse = a => a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);

const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};


const dataReverse = data =>
  data.reduce((acc, num, idx) => (acc.splice(~(idx >> 3 << 3), 0, num), acc), ['😊'])
      .slice(0, -1);

const dataReverse = data =>
  data.reduce((acc, num, idx) => [ [...(idx % 8 ? acc.shift() : []), num], ...acc ] , [])
<<<<<<< HEAD
      .flat();
=======
      .flat();


 
>>>>>>> 6f3837b552b87c44e35d32f03ed67059af4839da
