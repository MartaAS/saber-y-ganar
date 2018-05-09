function application() {
    var questions = [];
    var time;
    var i = 0;
    var correctAnswer;
    var interval;
    var userPoints = 0;
    var result = "";
    var questionContainer = document.querySelector('.question__display');
    var buttonStartGame = document.querySelector('.button__start');


    function start() {
        buttonStartGame.addEventListener('click', function () {
            countDownQuestion();
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

    var displayQuestion = () => {

        var answersContainer = document.querySelector('.option__display');

        while (answersContainer.firstChild) {
            answersContainer.removeChild(answersContainer.firstChild);
        }

        if (i < questions.length) {
            time = 10;
            var allQuestions = "";
            questionContainer.innerHTML = questions[i].question.text;
            correctAnswer = questions[i].correctAnswerId;


            for (var j = 0; j < questions[i].answers.length; j++) {
                var answerText = questions[i].answers[j].text;
                var answerId = questions[i].answers[j].id;

                allQuestions += `<li id=${j}>
                                  <input id=${j} type="radio" name="optionAnswer" value=${answerId} />
                                  <label>${answerText}</label>
                                </li>`

                answersContainer.innerHTML = allQuestions;
            }
            i++;
            buttonStartGame.innerHTML = 'Siguiente Pregunta';
        } else {
            var endGame = document.querySelector('.end__game');
            questionContainer.innerHTML = '';
            clearTheInterval();
            showHistoryGame();
            i = 0;
        }
    }

    function showHistoryGame() {
        var historyContainer = document.querySelector('.historic__game');
        result += `<p>Marta</p><p>${userPoints}</p>`
        historyContainer.innerHTML = result;
        console.log(result);
    }

    function addPoints() {
        userPoints++
        console.log(userPoints);
    }

    function removePoints() {
        userPoints--
    }

    var checksIfchecked = () => {
        var answerInput = document.getElementsByTagName('input')
        var value;
        for (var r = 0; r < answerInput.length; r++) {
            if (answerInput[r].checked) {
                value = answerInput[r].value;
                if (value == correctAnswer) {
                    addPoints();
                } else {
                    removePoints();
                }
            }
        }
    }

    function clearTheInterval() {
        clearInterval(interval)

    }


    function countDownQuestion() {
        interval = setInterval(count, 2000);
        function count() {
            if (i <= questions.length) {
                time--
                console.log('-----', time)
                if (time === 0) {
                    time = 10;
                    displayQuestion()
                }
            }
        }
    }


    return {
        start: start
    }

}











