const testData = {
  testName: "Тест по комп'ютерним іграм",
  questions: [
    {
      question: "Яка гра вважається першою у світі?",
      answers: [
        { answer: "Pong", isCorrect: true },
        { answer: "Super Mario Bros", isCorrect: false },
        { answer: "Tetris", isCorrect: false },
        { answer: "Space Invaders", isCorrect: false }
      ]
    },
    {
      question: "Який рік вийшла перша версія гри 'World of Warcraft'?",
      answers: [
        { answer: "2004", isCorrect: true },
        { answer: "2001", isCorrect: false },
        { answer: "2007", isCorrect: false },
        { answer: "1999", isCorrect: false }
      ]
    },
    {
      question: "Хто створив гру 'The Legend of Zelda'?",
      answers: [
        { answer: "Shigeru Miyamoto", isCorrect: true },
        { answer: "Hideo Kojima", isCorrect: false },
        { answer: "Satoshi Tajiri", isCorrect: false },
        { answer: "Todd Howard", isCorrect: false }
      ]
    },
    {
      question: "Яка гра вважається найпопулярнішою у світі?",
      answers: [
        { answer: "Minecraft", isCorrect: true },
        { answer: "Fortnite", isCorrect: false },
        { answer: "League of Legends", isCorrect: false },
        { answer: "Call of Duty", isCorrect: false }
      ]
    },
    {
      question: "Який жанр гри включає 'Final Fantasy'?",
      answers: [
        { answer: "Рольова гра (RPG)", isCorrect: true },
        { answer: "Екшен", isCorrect: false },
        { answer: "Шутер", isCorrect: false },
        { answer: "Стратегія", isCorrect: false }
      ]
    }
  ]
};

const testContainer = document.getElementById('test-container');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');

function displayQuestions() {
  testData.questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          <ul>
              ${q.answers.map(answer => `
                  <li>
                      <label>
                          <input type="radio" name="question${index}" value="${answer.isCorrect}">
                          ${answer.answer}
                      </label>
                  </li>
              `).join('')}
          </ul>
      `;
      testContainer.appendChild(questionDiv);
  });
}

function calculateResult() {
  let score = 0;
  testData.questions.forEach((q, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === 'true') {
          score++;
      }
  });
  return score;
}

submitBtn.addEventListener('click', () => {
  const score = calculateResult();
  resultDisplay.textContent = `Ваш результат: ${score}/${testData.questions.length}`;
});

displayQuestions();