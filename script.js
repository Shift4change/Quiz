let start = document.getElementById("start");

let quiz = document.getElementById("quiz")

let question = document.getElementById("question");

let timer = document.getElementById("timer")

let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");

const shuffledQuestions, currentQuestionIndex

var question = [
    {
        question: "Smallest country in South America",
        options: [
            {
                option: "Paraguay",
                correct: false
            }, {
                option: "Suriname",
                correct: true
            }, {
                option: "Uruguay",
                correct: false
            }, {
                option: "Ecuador",
                correct: false
            }

        ],

        question: " what's the biggest muscle in the arm",
        options: [
            {
                option: "Brachialis",
                correct: false
            }, {
                option: "Triceps",
                correct: true
            }, {
                option: "Biceps",
                correct: false
            }, {
                option: "Coracobrachialis",
                correct: false
            }

        ],

        question: " Longest muscle of the back",
        options: [
            {
                option: "Trapezius",
                correct: false
            }, {
                option: "Latissimus Dorsi",
                correct: false
            }, {
                option: "Rhomboids",
                correct: false
            }, {
                option: "Longissmus",
                correct: true
            }

        ],

        question: " Second most popular sport in the world",
        options: [
            {
                option: "Baseball",
                correct: false
            }, {
                option: "Basketball",
                correct: false
            }, {
                option: "Cricket",
                correct: true
            }, {
                option: "Volleyball",
                correct: false
            }

        ]
    }
]

let lastQuestionIndex = questions.length- 1;
let runningQuestion = 0;

//render a question

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";

}

start.style.display = "none";
renderQuestion.Question();
quiz.style.display = "block";
// let startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startQuiz)

function startQuiz() {

    // console.log("Started")
    // hide welcome contaier
    // show question container
    // show first question-function
    showQuestion(0)


    //start timer -function
    startButton.classList.add("hide")``
}
function showQuestion(questionNumber) {
    //select question number from question array [0]
    //display question on screen
}

function selectAnswer() {


}

var time
var highscore