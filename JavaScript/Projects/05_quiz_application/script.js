document.addEventListener("DOMContentLoaded", () => {
    let startBtn = document.getElementById("start-btn");
    let nextBtn = document.getElementById("next-btn");
    let restartBtn = document.getElementById("restart-btn");

    let questionContainer = document.getElementById("question-container");
    let questionText = document.getElementById("question-text");
    let choicesList = document.getElementById("choices-list");
    let resultContainer = document.getElementById("result-container");
    let scoreDisplay = document.getElementById("score");

    let currentQuestionIndex = 0;
    let score = 0;

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

    startBtn.addEventListener("click", startQuiz);
    function startQuiz() {
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion() {
        let currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        choicesList.innerHTML = "";
        currentQuestion.choices.forEach(choice => {
            let li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", function () {
                if (choice === currentQuestion.answer) {
                    score++;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            });
            choicesList.appendChild(li);
        });
    }
    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = score;
    }
    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });
});

