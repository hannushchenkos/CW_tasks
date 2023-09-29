// https://www.codewars.com/kata/586c1cf4b98de0399300001d

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(h, d) {
  return h - d > 0 ? h - d : 0;
}

//const combat = (health, damage) => Math.max(0, health - damage);
