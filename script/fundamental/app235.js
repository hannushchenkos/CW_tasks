// Remove the time - https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

function shortenToDate(longDate) {
  return longDate.split(',')[0]
}


function shortenToDate(longDate) {
  // your code here
  return longDate.slice(0, longDate.indexOf(","));
}

const shortenToDate =longDate => longDate.replace(/,.+$/,'');