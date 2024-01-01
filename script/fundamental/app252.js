// https://www.codewars.com/kata/582e0e592029ea10530009ce/- to do

function duckDuckGoose(players, goose) {
  console.log(players[0] + ' || ' + goose)
  const amount = players.length;
  return players[goose > amount ? (goose % amount)-1 : goose-1].name
}
