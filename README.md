# Code-Quiz
Timed coding quiz with multiple-choice questions.

## Description 

This code starts by defining several variables that reference different elements on the webpage, such as the quiz questions and user's initials. 

#Thought Process:
* The **startQuiz()** function is called when the user clicks the start button, which hides the start screen and displays the first question. 

* The **showQuestion()** function displays the current question and its possible answers, and the **checkAnswer()** function is called when the user clicks an answer button. It checks if the answer is correct and provides feedback to the user. 

* The **updateTime()** function is called every second and updates the remaining time for the quiz. 

* **The endQuiz()** function is called when the quiz ends, either when the user finishes all the questions or when the remaining time is less than or equal to 0. It also provides the final score and the option to save the score with initials, which is done by the **saveScore()** function and is also triggered when the user press Enter key after typing the initials.

The score on **scores.js** folder is for displaying and managing the high scores of the quiz application. 

* The **updateScore()** function retrieves the high scores from the local storage and sorts them in descending order based on the score. It then displays each score as a list item, showing the user's initials and their score. 

* The **clearScores()** function is called when the user clicks the clear button, which removes all the high scores from the local storage and reloads the page. 

* The **updateScore()** function is called when the page loads, which shows the high scores as soon as the page loads. 

* The ***viewHighScores*** is a reference to the ul element in the HTML that will be used to display the high scores, and the ***clearButton*** is a reference to the clear button in the HTML.

## Usage

When on main page, click on **Start Quiz** and answer the questions displayed on screen.
  * When the correct answer is clicked, feebg=back is provided and, the next question appears;
  * If the answer clicked was incorrect, then we substract 10 seconds from the clock;
  * The quiz ends when all questions are answered or the timer reaches 0;
  * When the game ends, it should display your score and give you the ability to save your score and your initials.
  * Keep playing and and see all your scores displayed in a list. If unsatisfied and you want a clean slate, just **click** on ***Clear Highscores*** and start again. 

  ![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](/assets/javaScript/images/Coding%20Quiz.gif)
  Deployed Application: 

  ## Credits
  N/A

  ## License
  Check the LICENSE file for details in the repository