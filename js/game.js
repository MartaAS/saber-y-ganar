function application() {
    var currentQuestionIndex = 0;
    var userPoints;
    var intervalCountDown;
    var countDownTime;
    var correctAnswer;

    var questionContainer;
    var buttonStartGame;
    var buttonNext;


    function start() {
        getQuestions(function (data) {
            questions = data;
        });
        userPoints = 0;
        countDownTime = 9;
        questionContainer = document.querySelector('.question__display');
        buttonStartGame = document.querySelector('.button__start');
        buttonStartGame.addEventListener('click', startGame);
        buttonNext = document.querySelector('.button__next');
        buttonNext.addEventListener('click', onNextQuestion);
        buttonNext.style.display = "none";
    }

    function getQuestions(callback) {
        var serverData = [
            {
                question: { id: 1, text: 'Pregunta1' },
                answers: [{ id: 1, text: 'A1' }, { id: 2, text: 'A2' }, { id: 3, text: 'A3' }],
                correctAnswerId: 1
            },
            {
                question: { id: 2, text: 'Pregunta2' },
                answers: [{ id: 4, text: 'B1' }, { id: 5, text: 'B2' }, { id: 6, text: 'B3' }],
                correctAnswerId: 5
            },
            {
                question: { id: 3, text: 'Pregunta3' },
                answers: [{ id: 7, text: 'C1' }, { id: 8, text: 'C2' }, { id: 9, text: 'C3' }],
                correctAnswerId: 9
            },
            {
                question: { id: 4, text: 'Pregunta4' },
                answers: [{ id: 10, text: 'A1' }, { id: 11, text: 'A2' }, { id: 12, text: 'A3' }],
                correctAnswerId: 11
            },
            {
                question: { id: 5, text: 'Pregunta5' },
                answers: [{ id: 13, text: 'B1' }, { id: 14, text: 'B2' }, { id: 15, text: 'B3' }],
                correctAnswerId: 15
            },
            {
                question: { id: 6, text: 'Pregunta6' },
                answers: [{ id: 16, text: 'C1' }, { id: 17, text: 'C2' }, { id: 18, text: 'C3' }],
                correctAnswerId: 17
            },
        ];
        callback(serverData);
    }


    function startGame() {
        intervalCountDown = setInterval(countDown, 1000);
        displayQuestion();
    }

    function onNextQuestion() {
        updateScore();
        resetCountDownTime();
        moveIndexToNextQuestion();
        cleanQuestions();
        if (areThereMoreQuestions()) {
            displayQuestion();
        } else {
            displayEndGame();
        }
    }

    function areThereMoreQuestions() {
        return currentQuestionIndex < questions.length;
    }

    function moveIndexToNextQuestion() {
        currentQuestionIndex++;
    }

    function displayQuestion() {
        var allQuestions = "";
        questionContainer.innerHTML = questions[currentQuestionIndex].question.text;
        for (var j = 0; j < questions[currentQuestionIndex].answers.length; j++) {
            var answerText = questions[currentQuestionIndex].answers[j].text;
            var answerId = questions[currentQuestionIndex].answers[j].id;


            allQuestions += `<li id=${j}>
                                  <input id=${j} type="radio" name="optionAnswer" value=${answerId} />
                                  <label>${answerText}</label>
                                </li>`;

            paintQuestions(allQuestions);
            displayButtons();
        }
    }

    function getAnswerContainer() {
        var answersContainer = document.querySelector('.option__display');
        return answersContainer;
    }

    function paintQuestions(allQuestions) {
        getAnswerContainer().innerHTML = allQuestions;

    }

    function cleanQuestions() {
        var answerContainer = getAnswerContainer();
        while (answerContainer.firstChild) {
            answerContainer.removeChild(answerContainer.firstChild);
        }
    }

    function displayButtons() {
        buttonStartGame.style.display = "none";
        buttonNext.style.display = "block";
    }

    function doNotDisplayButtonNext() {
        buttonNext.style.display = "none";
    }

    function displayEndGame() {
        doNotShowMessage();
        clearTheInterval();
        showHistoryGame();
        doNotDisplayButtonNext();
    }


    function doNotShowMessage() {
        var endGame = document.querySelector('.end__game');
        buttonStartGame.style.display = "none";
        questionContainer.innerHTML = '';
    }


    function clearTheInterval() {
        clearInterval(intervalCountDown);
    }

    function countDown() {
        countDownTime--;
        if (countDownTime === 0) {
            countDownTime = 9;
            timeOut();
        }
    }

    function timeOut() {
        onNextQuestion();
    }

    function resetCountDownTime() {
        countDownTime = 9;
    }

    function correctAnswer() {
        if (areThereMoreQuestions()) {
            return questions[currentQuestionIndex].correctAnswerId;
        }
    }

    function getAnswerValue(answerInput) {
        for (var r = 0; r < answerInput.length; r++) {
            if (answerInput[r].checked) {
                return answerInput[r].value;
            }
        }
    }

    function calculatePoints(correctAnswer, answerValue) {
        return correctAnswer == answerValue ? addPoints() : removePoints();
    }

    function addPoints() {
        if (countDownTime <= 2) {
            return + 2;
        } else if (countDownTime > 2 && countDownTime <= 10) {
            return + 1;
        } else {
            return 0;
        }
    }

    function removePoints() {
        if (countDownTime > 20) {
            return -3;
        } else if (countDownTime > 10) {
            return - 2;
        } else if (countDownTime < 10) {
            return - 1;
        }
    }

    function updateScore() {
        userPoints += calculatePoints(correctAnswer(), getAnswerValue(document.querySelectorAll('input')));
    }

    function showHistoryGame() {
        var result = "";
        var historyContainer = document.querySelector('.historic__game');
        result += `<p>Marta</p>
                   <p>${userPoints}</p>`
        historyContainer.innerHTML = result;
    }

    return {
        start: start,
    }

}
