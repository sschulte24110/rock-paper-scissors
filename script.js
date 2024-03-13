let playerScore = 0;
let compScore = 0;
let gameWinner = '';


const computerPlay = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choice.length);
    return choice[randomNum];
    
}

const game = () => {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt('Make your selection', 'Rock, Paper, Scissors').toLowerCase();
    //     const compSelection = computerPlay();
    //     console.log('1', playRound(playerSelection, compSelection));
    // }


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const compSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, compSelection));
            playerWinText.textContent = 'Player Win totals: ' + playerScore;
            computerWinText.textContent = 'Computer Win totals ' + compScore;
            endGame();
        });
    });

    const playRound = (playerSelection, compSelection) => {
        if (playerSelection === compSelection) {
            return `You tie! You both picked ${playerSelection}`;
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
}
const container = document.querySelector('#container');
const resultsDiv = document.createElement('div');
resultsDiv.style.marginTop = '20px';
container.appendChild(resultsDiv);

const playerWinText = document.createElement('p');
playerWinText.style.color = 'blue';
playerWinText.textContent = 'Player Win totals: ' + playerScore;
resultsDiv.appendChild(playerWinText);

const computerWinText = document.createElement('p');
computerWinText.style.color = 'blue';
computerWinText.textContent = 'Computer Win totals: ' + compScore;
resultsDiv.appendChild(computerWinText);

const battleWinText = document.createElement('p');
battleWinText.style.color = 'black';
resultsDiv.appendChild(battleWinText);

const gameWinText = document.createElement('p');
gameWinText.style.color = 'red';
gameWinText.textContent = gameWinner;
resultsDiv.appendChild(gameWinText);

function endGame() {
        if (playerScore === 5) {
            gameWinner = "You Win the game to 5 points! You're a rockstar!";
            gameWinText.textContent = gameWinner;

            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play Again!';
            resultsDiv.appendChild(playAgainButton);

            playAgainButton.addEventListener('click', () => {
                location.reload();
            });
        } else if (compScore === 5) {
            gameWinner = 'Computer Wins the game to 5 points. Better luck next time!';
            gameWinText.textContent = gameWinner;

            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play Again!';
            resultsDiv.appendChild(playAgainButton);

            playAgainButton.addEventListener('click', () => {
                location.reload();
            });
        }
}

game();