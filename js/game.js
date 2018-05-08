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
    ]
    callback(serverData);
};
// La teneis que usar pasando un callback, o sea una funcion:
// Ejemplo de uso:

var questions = [];
getQuestions(function (data) {
    questions = data;
});

var questionContainer = document.querySelector('.question__display')
var optionContainer = document.querySelector('.option__display')

var button = document.querySelector('button')
button.addEventListener('click', displayQuestion)

var i = 0;

function displayQuestion() {
    var myNode = document.querySelector('.option__display')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        console.log(myNode)
    }
    questionContainer.innerHTML = questions[i].question.text;
    for (var j = 0; j < questions[i].answers.length; j++) {
        var optionText = questions[i].answers[j].text;
        var optionId = questions[i].answers[j].id;

        optionLink = document.createElement('li');
        optionContainer.appendChild(optionLink);
        optionLink.innerHTML = optionText + ' ' + optionId;
    }
    i++;
    showClickedOption();
}




function showClickedOption() {
    var listOptions = document.getElementsByTagName('li');
    for (var i = 0; i < listOptions.length; i++) {
        listOptions[i].addEventListener('click', function () {
            if ()


        })
    }
}








