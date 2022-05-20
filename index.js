

const computerPlay = () => {
    let getRandomNumber = Math.random();

    let computerChoice = ''

    console.log(getRandomNumber);

    if (getRandomNumber < 0.33 ) {
        computerChoice = 'r'
    } else if (getRandomNumber >= 0.33 && getRandomNumber < 0.66 ) {
        computerChoice = 'p'
    } else if (getRandomNumber >= 0.66) {
        computerChoice = 's'
    }

    return computerChoice;
};

console.log(computerPlay());


let getPlayerChoice =  prompt('Choose rock, paper or scissors. Write it without capital letter');

let playerChoice = '';

if (getPlayerChoice === 'rock') {
    playerChoice = 'r';
} else if (getPlayerChoice === 'paper')  {
    playerChoice = 'p'
} else if ((getPlayerChoice === 'scissors')) {
    playerChoice = 's'
}


