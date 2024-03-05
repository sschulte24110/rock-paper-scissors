// let playerScore = 0;
// let compScore = 0;

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
        return 'You lose! Paper covers rock'; 
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        return 'You win! Rock crushes scissors'; 
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        return 'You Win! Paper covers rock'; 
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        return 'You lose! Scissors cuts paper'; 
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        return 'You lose! Rock crushes scissors'; 
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        return 'You win! Scissors cuts paper'; 
    }
}

const playerSelection = 'rock';


const game = () => {
    for (let i = 0; i < 5; i++) {
        const compSelection = computerPlay();
        console.log(playRound(playerSelection, compSelection)); 
    }
}

game();
