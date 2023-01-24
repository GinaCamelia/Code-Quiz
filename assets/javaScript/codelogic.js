let timeId = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let questionsId = document.querySelector('#questions');
let choicesId = document.querySelector('#choices');
let userInitials = document.querySelector('#initials');
let submitBtn = document.querySelector('#submit');
let feedbackUser = document.querySelector('#feedback');


let currentQuestion = 0;
let remainingTime = questions.length * 15;
let timeInterval;

// Start the quiz
function startQuiz(){
    let startScreen = document.querySelector('#start-screen');
    startScreen.style.display = 'none';
    // console.log(startScreen);
    questionsId.removeAttribute('class');
    showQuestion();
    timeInterval = setInterval(updateTime, 1000);
}

// Show the current question and answers
function showQuestion() {
    const questionTitle = document.querySelector('#question-title');
    questionTitle.textContent = questions[currentQuestion].question;
    choicesId.innerHTML = '';

    for (let i = 0; i < questions[currentQuestion].answer.length; i++) {
        const button = document.createElement('button');
        button.textContent = questions[currentQuestion].answer[i];
        button.addEventListener('click', checkAnswer);
        choicesId.appendChild(button);
    }
}


startBtn.addEventListener('click', startQuiz);