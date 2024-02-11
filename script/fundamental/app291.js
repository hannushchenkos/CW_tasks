
// Hero Prototype - https://www.codewars.com/kata/55e8aba23d399a59500000ce/

// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

function Hero (name = 'Hero', experience = 0, health = 100, position = '00', damage = 5) {  
  return {
    name: name, 
    experience: experience,
    health: health,
    position: position,
    damage: damage
  }
}


function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

class Hero {
	constructor(name = 'Hero') {
  	this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}
