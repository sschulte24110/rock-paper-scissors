let playerScore = 0;
let compScore = 0;

const computerPlay = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = choice[randomNum];
    return compChoice;
}

const playRound = (playerSelection, compSelection) => {
    if (playerSelection === 'rock' && compSelection === 'rock') {
        return 'You tie! You both picked rock';
    } else if (playerSelection === 'paper' && compSelection === 'paper') {
        return 'You tie! You both picked paper'; 
    } else if (playerSelection === 'scissors' && compSelection === 'scissors') {
        return 'You tie! You both picked scissors'; 
    } else if (playerSelection === 'rock' && compSelection === 'paper') {
        compScore = compScore + 1;
        return 'You lose! Paper covers rock'; 
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        playerScore = playerScore + 1;
        return 'You win! Rock crushes scissors'; 
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        playerScore = playerScore + 1;
        return 'You Win! Paper covers rock'; 
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        compScore = compScore + 1;
        return 'You lose! Scissors cuts paper'; 
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        compScore = compScore + 1;
        return 'You lose! Rock crushes scissors'; 
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        playerScore = playerScore + 1;
        return 'You win! Scissors cuts paper'; 
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your selection', 'Rock, Paper, Scissors').toLowerCase();
        const compSelection = computerPlay();
        console.log('1', playRound(playerSelection, compSelection));
    }

if (playerScore > compScore) {
    return 'You beat the computer! What luck!'
} else if (playerScore < compScore) {
    return 'You got beat by the computer! Tough luck.'
} else {
    return 'You tied. That was anti-climactic!'
}
}
console.log(game());
