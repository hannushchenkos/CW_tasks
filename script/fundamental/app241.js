// Define a card suit - https://www.codewars.com/kata/5a360620f28b82a711000047

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

function defineSuit(card) {
  switch(card.split('')[card.length-1]){
      case '♣': return 'clubs'
      case '♦': return 'diamonds'
      case '♥': return 'hearts'
      case '♠': return 'spades'
  }
}

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}

function defineSuit(card) {
if(card.includes('♥')) return 'hearts'
if(card.includes('♦')) return 'diamonds'
if(card.includes('♣')) return 'clubs'
if(card.includes('♠')) return 'spades' 
}

function defineSuit(card) {
  return {
    '♣' : 'clubs',
    '♦' : 'diamonds',
    '♥' : 'hearts',
    '♠' : 'spades'
  }[card.substr(-1)]
}

function defineSuit(card) {
    return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}

