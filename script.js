let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-btn")
// let restartButton=document.getElementById("restart-btn")

let questionContainerElement = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")

let answerButtons = document.getElementById("answer-buttons")

startButton.addEventListener("click", startGame)
// restartButton.addEventListener("click",restartGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    let selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    restartButton.classList.add("hide")
    // if (shuffledQuestions.length > currentQuestionIndex +1) {  
    // nextButton.classList.remove("hide")
    // } else {
    //     restartButton.classList.remove("hide")
    // }
}
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add("correct")
        } else {
            element.classList.add("wrong")
        }
    }
    function clearStatusClass(element) {
        element.classList.remove("correct")
        element.classList.remove("wrong")
    }

    let questions = [
        {
            question: "what is the Smallest country in South America?",
            answers: [
                {
                    text: "Paraguay", correct: false
                }, {
                    text: "Suriname", correct: true
                }, {
                    text: "Uruguay", correct: false
                }, {
                    text: "Ecuador", correct: false
                }

            ],

            question: " what's the biggest muscle in the arm?",
            answers: [
                {
                    text: "Brachialis", correct: false
                }, {
                    text: "Triceps", correct: true
                }, {
                    text: "Biceps", correct: false
                }, {
                    text: "Coracobrachialis", correct: false
                }

            ],

            question: "what is Longest muscle of the back?",
            answers: [
                {
                    text: "Trapezius", correct: false
                }, {
                    text: "Latissimus Dorsi", correct: false
                }, {
                    text: "Rhomboids", correct: false
                }, {
                    text: "Longissmus", correct: true
                }

            ],

            question: "what is Second most popular sport in the world?",
            answers: [
                {
                    text: "Baseball", correct: false
                }, {
                    text: "Basketball", correct: false
                }, {
                    text: "Cricket", correct: true
                }, {
                    text: "Volleyball", correct: false
                }

            ]
        }

    ]