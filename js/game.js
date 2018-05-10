function application() {
    var currentQuestionIndex = 0;
    var intervalCountDown;
    var countDownTime;
    var correctAnswer;
    var userPoints = 0;

    var questionContainer;
    var buttonStartGame;


    function start() {
        questionContainer = document.querySelector('.question__display');
        buttonStartGame = document.querySelector('.button__start');
        countDownTime = 9;
        intervalCountDown = setInterval(countDown, 1000);
        buttonStartGame.addEventListener('click', function () {
            calculateScore();
            displayQuestion();
            countDownTime = 9;
        });
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
        ]
        callback(serverData);
    };
    getQuestions(function (data) {
        questions = data;
    });

    function cleanQuestions(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    function displayQuestion() {

        var answersContainer = document.querySelector('.option__display'); 3
        cleanQuestions(answersContainer)

        if (currentQuestionIndex < questions.length) {
            var allQuestions = "";
            questionContainer.innerHTML = questions[currentQuestionIndex].question.text;
            correctAnswer = questions[currentQuestionIndex].question.correctAnswerId



            for (var j = 0; j < questions[currentQuestionIndex].answers.length; j++) {
                var answerText = questions[currentQuestionIndex].answers[j].text;
                var answerId = questions[currentQuestionIndex].answers[j].id;

                allQuestions += `<li id=${j}>
                                  <input id=${j} type="radio" name="optionAnswer" value=${answerId} />
                                  <label>${answerText}</label>
                                </li>`

                answersContainer.innerHTML = allQuestions;

            }
            currentQuestionIndex++;
            buttonStartGame.innerHTML = 'Siguiente Pregunta';

        } else {
            displayEndGame()
        }
    }

    function displayEndGame() {
        doNotShowMessage()
        clearTheInterval();
        showHistoryGame();
        currentQuestionIndex = 0;
    }


    function doNotShowMessage() {
        var endGame = document.querySelector('.end__game');
        buttonStartGame.style.display = "none";
        questionContainer.innerHTML = '';
    }


    function clearTheInterval() {
        clearInterval(intervalCountDown)
    }


    function countDown() {
        if (currentQuestionIndex <= questions.length) {
            countDownTime--
            if (countDownTime === 0) {
                countDownTime = 9;
                displayQuestion();
                //to fix this display, it has not to be here
            }
        }
    }

    function checkIfInputChecked() {
        var answerInput = document.getElementsByTagName('input')
        var value;
        for (var r = 0; r < answerInput.length; r++) {
            if (answerInput[r].checked) {
                value = answerInput[r].value;
                return value
            }
        }
    }

    function checkIfRight() {
        var value = checkIfInputChecked()
        if (value == correctAnswer) {
            return true
        }
        return false
    }

    function calculateScore() {
        var correctValue = checkIfRight();
        if (correctValue == true) {
            addPoints()
        } else {
            removePoints()
        }
    }

    function addPoints() {
        userPoints++
    }

    function removePoints() {
        userPoints--
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
