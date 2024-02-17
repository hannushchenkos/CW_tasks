//Building blocks - https://www.codewars.com/kata/55b75fcf67e558d3750000a3

//Write a class Block that creates a block (Duh..)
//Requirements

//The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

class Block{

  constructor([...args]){
    this.width = args[0]
    this.length = args[1]
    this.height = args[2]
  }
  
  getWidth(){
    return this.width
  } 
  
  getLength(){
    return this.length
  }
  
  getHeight(){
    return this.height
  }
  
  getVolume(){
    return this.width * this.length * this.height
  }
  
  getSurfaceArea(){
    return (this.height * this.length + this.height * this.width + this.width * this.length) * 2 
  }
}



class Block {
  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  getWidth(){ return this.w }
  getLength(){ return this.l }
  getHeight(){ return this.h }
  getVolume(){
    let {l, w, h} = this;
    return w*l*h;
  }
  getSurfaceArea(){
    let {l, w, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
}

