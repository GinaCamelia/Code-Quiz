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

// Check if andswer is correct
function checkAnswer(event) {
    const clickedAnswer = event.target.textContent;
    if(clickedAnswer === questions[currentQuestion].correctAnswer){
        // correct answer + move to the next question
        currentQuestion++;
        // if all questions are correct
        if(currentQuestion === questions.length){
            endQuiz();
        } else {
            showQuestion();
        }
        feedbackUser.textContent = 'Correct👌';
    } else {
        //substract 10 seconds from the timer
        remainingTime -= 10;
        updateTime();
        feedbackUser.textContent = 'Incorrect👎'
    }
    //remove the class of hide to show feedback
    feedbackUser.removeAttribute('class', 'hide');
    // set time for how long to display feedback
    setTimeout(function(){
        feedbackUser.setAttribute('class', 'hide');
    }, 1500);
}

// update the time remaining
function updateTime() {
    timeId.textContent = remainingTime;
    remainingTime--;
    if(remainingTime <= 0){
        clearInterval(timeInterval);
        endQuiz();
    }
}













startBtn.addEventListener('click', startQuiz);