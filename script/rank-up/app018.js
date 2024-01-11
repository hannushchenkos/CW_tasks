// The Supermarket Queue - https://www.codewars.com/kata/57b06f90e298a7b53d000a86

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.
// Important

// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
// Examples

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// Clarifications

//     There is only ONE queue serving many tills, and
//     The order of the queue NEVER changes, and
//     The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool


let maxCustomer = (queue) => Math.max(...queue)

function queueTime(customers, n) {
    let result = 0;
    if(customers.length < 1){
        result = 0;
    }else if(n > customers.length){
        result = maxCustomer(customers)
    }else{
        customers = customers.reverse()
        let currentQueue = Array(n).fill(0)
        

        while(customers.length > 0){
            for(i = 0; i < n; i++){
                if (currentQueue[i] === 0 && customers.length > 0) {
                    currentQueue[i] = customers.pop(); 
                }
            }
            
            let minQueueItem = Math.min(...currentQueue)
            result += minQueueItem;
            for(i = 0; i < n; i++){
                console.log(result)
                currentQueue[i] = currentQueue[i] - minQueueItem; 
            }

            console.log(currentQueue);
        }
        result += Math.max(...currentQueue);
    }
    return result;
}



// console.log(queueTime([4,5,3,3], 7));
console.log(queueTime([21,22,15,24,41,4,16,44,32,3,21,45,42,50,7,40,17,1,9,10,35,22,19,31,42,33,17,28,42], 5));


// function queueTime(customers, n) {

//     return Math.max(...(customers.reduce((prev, next) => {
//       prev[prev.indexOf(Math.min(...prev))] += next;
//       return prev;
//     }, Array(n).fill(0))));
//   }


// Recursion with real life emitation steps 

function queueTime(queue, n, tills = [], time = 0) {

    if (!queue.length && !tills.length) return time   // ‣‣‣ If queue and tills is free => we finish => return time
    
    if (tills.length < n && queue.length) {           // ‣‣‣ If there are empty tills and queue doesn't end
      tills.push( queue.shift() )                     // one person remove from queue to till
      return queueTime(queue, n, tills, time)         // repeat previous steps with new queue and tills
    }   
                                                      // ‣‣‣ If tills aren't empty
      let first = Math.min(...tills)                  // find the first person who will finish
      time += first                                   // first person has finished
      tills = tills.map(i => i - first)               // correct time for another persons in front of the tills
      tills.sort((a, b) => a - b)                     // sort persons in front of the tills according to their time
      tills.shift()                                   // first person leaves his till
      return queueTime(queue, n, tills, time)         // repeat previous steps with new tills and time 
}







// let oneTile = (queue) => queue.reduce((acc,cur)=>acc+=cur, 0)

// function queueTime(customers, n) {
//   return n === 1 || n > customers.length ? oneTile(customers) : 0
// }

// [1, 2].every(item => item > 0){
//   1--
//   2--
// }




