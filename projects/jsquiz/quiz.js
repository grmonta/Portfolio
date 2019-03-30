const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: 'What is NOT a Chicago-style food?',
    answers: {
      a: 'Italian Beef',
      b: 'Falafel',
      c: 'Deep Dish Pizza'
    },
    correctAnswer: 'b'
  },

  {
    question: 'What is the sculpture in Millenium Park really called?',
    answers: {
      a: 'The Bean',
      b: 'Photo Square',
      c: 'Cloud Gate'
    },
    correctAnswer: 'c'
  },
  {
    question: 'How many neighborhoods are officially in Chicago?',
    answers: {
      a: '77',
      b: '102',
      c: '61'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Where is the zero point of the grid system in Chicago?',
    answers: {
      a: 'Randolph & Madison',
      b: 'State & Madison',
      c: 'State & Monroe'
    },
    correctAnswer: 'b'
  }
];

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'darkgreen';

        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }

  //display quiz right away, init
  buildQuiz();

  //on submit , show ther results

  submitButton.addEventListener('click', showResults);
})();
