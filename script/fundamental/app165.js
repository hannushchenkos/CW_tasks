// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/

// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
  res = username.length > 3 && username.length < 17 ? /^[a-z0-9_]*$/g.test(username) : false
  return res
}

// function validateUsr(username) {
//   return /^[0-9a-z_]{4,16}$/.test(username)
// }

// function validateUsr(username) {
//   /**
//     - `^`        Start from the beginning of the string.
//     - `[]`       Allow any character specified, including...
//     - `a-z`      anything from a to z,
//     - `0-9`      anything from 0 to 9,
//     - `_`        and underscore.
//     - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
//     - `$`        End the string right after specified amount of allowed characters is given.
//   */
//   const validator = /^[a-z0-9_]{4,16}$/;
  
//   return validator.test(username);
// }

// const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);