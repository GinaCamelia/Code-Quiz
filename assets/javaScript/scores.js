//Store id's into variables
let viewHighScores = document.querySelector('#highscores');
let clearButton = document.querySelector('#clear');

// global variable to store the current score 
let currentScore = 0;

function updateScore(isCorrect) {
    
    // update the Score TODO
}

function clearScore() {
    currentScore = 0;
    // update the score
}

// clear the highscore from localStorage

localStorage.removeItem('highscores');
clearButton.addEventListener('click', clearScore);

updateScore();