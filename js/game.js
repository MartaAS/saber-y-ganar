function application() {
    var currentQuestionIndex = 0;
    var interval;
    var correctAnswer;
    var userPoints = 0;
    var result = "";

    var questionContainer = document.querySelector('.question__display');
    var buttonStartGame = document.querySelector('.button__start');


    function start() {
        countDownQuestion();
        buttonStartGame.addEventListener('click', function () {
            checksIfchecked();
            displayQuestion();
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

    //Removes the childs of a parent container, in this case the questions and answers, before showing the
    function cleanQuestions(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    var displayQuestion = () => {
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
        clearInterval(interval)
    }


    function countDownQuestion() {
        var time = 5;
        interval = setInterval(count, 1000);
        function count() {
            if (currentQuestionIndex <= questions.length) {
                time--
                console.log(time);
                if (time === 0) {
                    time = 5;
                    displayQuestion()
                }
            }
        }
    }


    var checksIfchecked = () => {
        var answerInput = document.getElementsByTagName('input')
        var value;
        for (var r = 0; r < answerInput.length; r++) {
            if (answerInput[r].checked) {
                value = answerInput[r].value;
                if (value == correctAnswer) {
                    addPoints();
                    answerInput.innerHTML = 'es correcto';
                } else {
                    removePoints();
                    answerInput.innerHTML = 'es incorrecto';
                }
            }
        }
    }

    function addPoints() {
        userPoints++
    }

    function removePoints() {
        userPoints--
    }

    function showHistoryGame() {
        var historyContainer = document.querySelector('.historic__game');
        result += `<p>Marta</p>
                   <p>${userPoints}</p>`
        historyContainer.innerHTML = result;
    }

    return {
        start: start
    }

}
