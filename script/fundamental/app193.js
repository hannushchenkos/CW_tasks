// Class Ball - https://www.codewars.com/kata/53f0f358b9cb376eca001079

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function(ballType) {
  console.log(ballType)
  this.ballType = ballType ? ballType : 'regular';
};

// var Ball = function(ballType = "regular") {
//   this.ballType = ballType;
// };

// var Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };
