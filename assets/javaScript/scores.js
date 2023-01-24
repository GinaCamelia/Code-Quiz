//Initialize variables
let viewHighScores = document.querySelector('#highscores');
const clearButton = document.querySelector('#clear');

function updateScore() {
    let highScore = JSON.parse(localStorage.getItem('highscore')) || [];

    // sort in ascending order
    highScore.sort((a, b) => a - b);
    // reverse the order 
    highScore.reverse();

    highScore.forEach(score => {
        let listItems = document.createElement('li');
        listItems.textContent = score.userInitials + ' - ' + score.score;
        viewHighScores.appendChild(listItems);
    });
}

function clearScores() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

clearButton.addEventListener('click', clearScores);

updateScore();