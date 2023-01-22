// selecting the ids from the page
let timerId = document.querySelector('#time');
let startScreen = document.querySelector('#start-screen');
let startButton = document.querySelector('#start');
let questionDisplay = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');
let endScreen = document.querySelector('#end-screen');
let finalScore = document.querySelector('#final-score');
let initials = document.querySelector('#initials');
let submit = document.querySelector('#submit');
let feedback = document.querySelector('#feedback');


// Declare a variable that stores the remaining time
let remainingTime = 90;
//variable that stores the ID of the setInterval function, Initially it is set to null.
let intervalId;
let currentQuestion = 0;

// Create function to diplay time
function displayTimer(){
timerId.innerHTML = remainingTime;
}

//A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener('click', function(){
    if(!intervalId) {
        intervalId = setInterval(function(){
            remainingTime--;
            displayTimer();
            if(remainingTime <= 0){
            //stop the timer
            clearInterval(timerId);
            //show the end screen
            //show final score
            //prompt for initials
            }
        }, 1000);
    }
    //hide the start screen
    startScreen.classList.add('hide');
    questionDisplay.classList.remove("hide");
    displayQuestion(0);
})

function displayQuestion(){
    questionTitle.innerHTML = questions[currentQuestion].question;

    //create an unordered list
    let ul = document.createElement('ul');
    choices.appendChild(ul);

    //loop through the choices and add them as list items
    for (let i = 0; i < questions[currentQuestion].choices.length; i++){
        
        //create a button for each answear
        let button = document.createElement('button');
        button.innerHTML = questions[currentQuestion].choices[i]; 
        ul.appendChild(button);  
    }
}






















// startButton.addEventListener('click', function(){
//     // hide the start screen
//     document.querySelector('#start-screen').style.display = 'none';

//     // show the question screen
//     document.querySelector('#questions').style.display = 'block';

//     //create an unordered list
//     let ul = document.createElement('ul');

//     // add the ul to the choices div
//     document.querySelector('#choices').appendChild(ul);


//     //set the first question at [0]
//     let currentQuestion = 0;

//     //loop through the choices and add them as list items
//     for (let i = 0; i < questions[currentQuestion].choices.length; i++) {

//         //create the list items
//         let li = document.createElement('li');
//         li.innerHTML = questions[currentQuestion].choices[i];

//         //create a button for each answear
//         let button = document.createElement('button');
//         button.innerHTML = questions[currentQuestion].choices[i];
        
//         //keep track of the remaining time
//         let remainingTime = 90;

//         //create function to diplay remaining time
//         function displayTime(){
//         document.querySelector('#time').innerHTML = remainingTime;
//         }

//         //start the timer 
//         let timerId = setInterval(function(){
//             remainingTime--;
//             displayTime();
//             if(remainingTime <= 0){
//                 //stop the timer
//                 clearInterval(timerId);
//                 //show the end screen
//                 //show final score
//                 //propmt for initials
//             }
//         }, 1000);

//         // check if answer is correct
//         button.addEventListener('click', function(){
//             if(questions[currentQuestion].choices[i] === questions[currentQuestion].answer){
//                 //go to the next question
//                 currentQuestion++;
//                 //if there are more questions
//                 if(currentQuestion < questions.length){
//                     //update the question
//                     document.querySelector('#question-title').innerHTML = 
//                     questions[currentQuestion].question;

//                 }
//             } else {
//                 //answer is incorrect
//                 //reduce the time
//                 remainingTime -=10;
//             }
//         })




//         ul.appendChild(li);
//     }
// });
