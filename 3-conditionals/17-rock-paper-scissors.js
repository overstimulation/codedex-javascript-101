// 0 - Rock, 1 - Paper, 2 - Scissors
let player = 0;
let computer = Math.floor(Math.random() * 10) % 3;

if (player === 0 && computer === 1) {
  console.log("Player picked: Rock");
  console.log("Computer picked: Paper");
  console.log("The computer won!");
} else if (player === 0 && computer === 2) {
  console.log("Player picked: Rock");
  console.log("Computer picked: Scissors");
  console.log("The player won!");
} else if (player === 1 && computer === 0) {
  console.log("Player picked: Paper");
  console.log("Computer picked: Rock");
  console.log("The player won!");
} else if (player === 1 && computer === 2) {
  console.log("Player picked: Paper");
  console.log("Computer picked: Scissors");
  console.log("The computer won!");
} else if (player === 2 && computer === 0) {
  console.log("Player picked: Scissors");
  console.log("Computer picked: Rock");
  console.log("The computer won!");
} else if (player === 2 && computer === 1) {
  console.log("Player picked: Scissors");
  console.log("Computer picked: Paper");
  console.log("The player won!");
} else {
  console.log("It's a draw!");
}
