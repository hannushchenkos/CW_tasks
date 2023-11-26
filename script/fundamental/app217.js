// Surface Area and Volume of a Box - https://www.codewars.com/kata/565f5825379664a26b00007c/

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, d){ //width, height, depth
  let area = w*d*2+w*h*2+d*h*2;
  let volume = w*h*d
  return [area, volume]
}