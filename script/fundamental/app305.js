// V A P O R C O D E - https://www.codewars.com/kata/5966eeb31b229e44eb00007a/

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

function vaporcode(string) {
    return [...string.toUpperCase()].filter(item => item != ' ').join('  ')
  }
  
  function vaporcode(string) {
    return [...string.toUpperCase().replaceAll(' ', '')].join('  ')
  }
  
  function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
  }
  
  const vaporcode = string =>
    string.toUpperCase().match(/\S/g).join(`  `);
  