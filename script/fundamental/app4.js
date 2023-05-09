//* Given an array of integers your solution should find the smallest integer. 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let tempInt = args[0];
    args.forEach(item => item < tempInt ? tempInt = item : item = item)
    return tempInt;
  }
}


//======//

let res = SmallestIntegerFinder.findSmallestInt([-5, 4, 2,1,4, 12])
console.log(res)