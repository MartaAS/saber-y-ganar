function application() {
    var i = 0;
    var userPoints = 0;

    function start() {
        buttonNextQuestion = document.querySelector('button');
        buttonNextQuestion.addEventListener('click', displayQuestion);
    }
    // La defincion de la funcion, copiar y pegar en vuestro codigo:
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
    // La teneis que usar pasando un callback, o sea una funcion:
    // Ejemplo de uso:

    var questions = [];
    getQuestions(function (data) {
        questions = data;
    });

    function displayQuestion() {
        var answersContainer = document.querySelector('.option__display');

        while (answersContainer.firstChild) {
            answersContainer.removeChild(answersContainer.firstChild);
            console.log(answersContainer);
        }

        if (i < questions.length) {
            var allQuestions = "";
            var questionContainer = document.querySelector('.question__display');
            questionContainer.setAttribute('id', i)
            questionContainer.innerHTML = questions[i].question.text;

            for (var j = 0; j < questions[i].answers.length; j++) {
                var answerText = questions[i].answers[j].text;
                var answerId = questions[i].answers[j].id;

                allQuestions += `<li id=${j}>
                                  <input id=${j} type="radio" name="optionAnswer" value=${answerId}/>
                                  <label>${answerText}</label>
                                </li>`

                answersContainer.innerHTML = allQuestions;
            }
            i++;
        }
    }

    function checksIfchecked() {
        var radios = document.querySelector('input')
        var value;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                value = radios[i].value;
                console.log(value)
            }
        }
    }






    return {
        start: start
    }

}











