let getPlayerChoice =  prompt('Choose rock, paper or scissors. Write it without capital letter');

let playerChoice = '';

if (getPlayerChoice === 'rock') {
    playerChoice = 'r';
} else if (getPlayerChoice === 'paper')  {
    playerChoice = 'p'
} else if ((getPlayerChoice === 'scissors')) {
    playerChoice = 's'
}


console.log(playerChoice);