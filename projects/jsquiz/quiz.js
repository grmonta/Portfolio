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
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          ` <div class="form-check">
        <input class="form-check-input" type="radio" name="question${questionNumber}" value="${letter}">
          <label class="form-check-label" for="exampleRadios1">
            ${letter}: ${currentQuestion.answers[letter]}
  </label>
</div>`
        );
      }
      output.push(
        `<div class="question pb-1"> ${currentQuestion.question} </div>
        <div class="answers pl-1"> ${answers.join('')} </div>`
      );
    });

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
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }

  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();
