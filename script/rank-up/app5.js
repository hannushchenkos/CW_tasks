//* In this kata you are required to, given a string, replace every symbol_char with its position in the alphabet. "a" = 1, "b" = 2, etc.

//* If anything in the text isn't a symbol_char, ignore it and don't return it.

//* Example: "The sunset sets at twelve o' clock." Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const MORSE_SYMBOLS =
  [
    {
      symbol_id: 1,
      symbol_char: 'A',
      symbol_code: '.-',
    },
    {
      symbol_id: 2,
      symbol_char: 'B',
      symbol_code: '-...',
    },
    {
      symbol_id: 3,
      symbol_char: 'C',
      symbol_code: '-.-.',
    },
    {
      symbol_id: 4,
      symbol_char: 'D',
      symbol_code: '-..',
    },
    {
      symbol_id: 5,
      symbol_char: 'E',
      symbol_code: '.',
    },
    {
      symbol_id: 6,
      symbol_char: 'F',
      symbol_code: '..-.',
    },
    {
      symbol_id: 7,
      symbol_char: 'G',
      symbol_code: '--.',
    },
    {
      symbol_id: 8,
      symbol_char: 'H',
      symbol_code: '....',
    },
    {
      symbol_id: 9,
      symbol_char: 'I',
      symbol_code: '..',
    },
    {
      symbol_id: 10,
      symbol_char: 'J',
      symbol_code: '.---',
    },
    {
      symbol_id: 11,
      symbol_char: 'K',
      symbol_code: '-.-',
    },
    {
      symbol_id: 12,
      symbol_char: 'L',
      symbol_code: '.-..',
    },
    {
      symbol_id: 13,
      symbol_char: 'M',
      symbol_code: '--',
    },
    {
      symbol_id: 14,
      symbol_char: 'N',
      symbol_code: '-.',
    },
    {
      symbol_id: 15,
      symbol_char: 'O',
      symbol_code: '---',
    },
    {
      symbol_id: 16,
      symbol_char: 'P',
      symbol_code: '.--.',
    },
    {
      symbol_id: 17,
      symbol_char: 'Q',
      symbol_code: '--.-',
    },
    {
      symbol_id: 18,
      symbol_char: 'R',
      symbol_code: '.-.',
    },
    {
      symbol_id: 19,
      symbol_char: 'S',
      symbol_code: '...',
    },
    {
      symbol_id: 20,
      symbol_char: 'T',
      symbol_code: '-',
    },
    {
      symbol_id: 21,
      symbol_char: 'U',
      symbol_code: '..-',
    },
    {
      symbol_id: 22,
      symbol_char: 'V',
      symbol_code: '...-',
    },
    {
      symbol_id: 23,
      symbol_char: 'W',
      symbol_code: '.--',
    },
    {
      symbol_id: 24,
      symbol_char: 'X',
      symbol_code: '-..-',
    },
    {
      symbol_id: 25,
      symbol_char: 'Y',
      symbol_code: '-.--',
    },
    {
      symbol_id: 26,
      symbol_char: 'Z',
      symbol_code: '--..',
    },
    {
      symbol_id: 27,
      symbol_char: '1',
      symbol_code: '.----',
    },
    {
      symbol_id: 28,
      symbol_char: '2',
      symbol_code: '..---',
    },
    {
      symbol_id: 29,
      symbol_char: '3',
      symbol_code: '...--',
    },
    {
      symbol_id: 30,
      symbol_char: '4',
      symbol_code: '....-',
    },
    {
      symbol_id: 31,
      symbol_char: '5',
      symbol_code: '.....',
    },
    {
      symbol_id: 32,
      symbol_char: '6',
      symbol_code: '-....',
    },
    {
      symbol_id: 33,
      symbol_char: '7',
      symbol_code: '--...',
    },
    {
      symbol_id: 34,
      symbol_char: '8',
      symbol_code: '---..',
    },
    {
      symbol_id: 35,
      symbol_char: '9',
      symbol_symbol_code: '----.',
    },
    {
      symbol_id: 36,
      symbol_char: '0',
      symbol_code: '-----',
    },
    {
      symbol_id: 37,
      symbol_char: 'SOS!',
      symbol_code: '...---...',
    },
  ];


//! ====================== !//
/**
 * @param {string} stringText
 * String text to convert to morse code
 */

function morse (stringText) {
  let morseBox = [];
  stringText
    .toUpperCase()
    .split('')
    .forEach((str) => {
      MORSE_SYMBOLS.forEach((morseItem) => {
        if (str === morseItem.symbol_char) {
          morseBox.push(morseItem.symbol_code);
        }
      });
    });
  return morseBox.join('.');
};

/**

 * @param {string} stringSentence
 * String Sentence to convert to morse seperated by "|"
 */
function morseSentence (stringSentence) {
  let sentenceBox = [];
  stringSentence.split(' ').forEach((string) => {
    sentenceBox.push(this.morse(string));
  });
  return sentenceBox.join('|');
};



/**
 * @param {string} morseText
 * Morse code to convert to String text
 */

function morseString(morseText) {
  let morseArr = morseText.split(' ')
  console.log(morseArr);
  morseArr.forEach((item, index)=>{
    if ( morseArr[index] == '' && morseArr[index+1] == '') {
      morseArr.splice(index, 2, '*')
    }
  })
  console.log(morseArr);
  
  let stringBox = [];
  morseArr.forEach((morse) => {
    if(morse === '*'){
      stringBox.push(' ');
    }
    MORSE_SYMBOLS.forEach((morseItem) => {
      if (morse === morseItem.symbol_code) {
        console.log(morseItem.symbol_code);
        stringBox.push(morseItem.symbol_char);
      }
    });
  });
  let finalResult = (stringBox) =>{
    // resStr = stringBox.join('')

    while (stringBox[0] == ' ' || stringBox[stringBox.length-1] == ' ') {
      if (stringBox[0] == ' ') {
        stringBox.shift();      
      }
      if (stringBox[stringBox.length-1] == ' ') {
        stringBox.pop();
      }
    };
    
    let result = stringBox.map((item, index) => {
      if (item === 'SOS!' && index === stringBox.length-1) {
        item = 'SOS' 
      } 
      return item;
    });
    console.log(result);

    return result.join('');
  }
  
  return finalResult(stringBox);
};



/**

 * @param {string} morseSentence
 * Morse code sentence to convert to string seperated by " "
 */
function stringSentence (morseSentence) {

  let sentenceBox = [];
  morseSentence.split('|').forEach((morse) => {
    sentenceBox.push(this.string(morse));
  });

  return sentenceBox.join(' ');

};



// morse();
// Morsestring();
// morseSentence();
// stringSentence();

function decodeMorse(morseCode){
  return morseString(morseCode);
}

/*===================*/

let res = morseString("    ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ")

console.log(res)
