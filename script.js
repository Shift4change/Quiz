
let startContainer = document.getElementById("bun-venit");
let quizContainer = document.getElementById("contain-quiz")
let submitButton = document.getElementById("submit");
let timpTp = document.getElementById("timp");
let fragen = document.getElementById("intrebari");
let aRaspuns = document.getElementById("choice-A");
let bRaspuns = document.getElementById("choice-B");
let cRaspuns = document.getElementById("choice-C");
let dRaspuns = document.getElementById("choice-D");
let sfarsitContainer = document.getElementById("sfarsit");
let sfarsitH =document.getElementById("sfarsit-happy");
var catTimp = 60;
//
//
//
// 

let questions = [{
    q: "What is the Smallest country in South America?",
    a: "a",
    c1: "Suriname",
    c2: "Uruguay",
    c3: "Paraguay",
    c4: "Ecuador"
}, {
    q: " What is the biggest muscle in the arm?",
    a: "c",
    c1: "Rhomboids",
    c2: "Biceps",
    c3: "Trapezius",
    c4: "Latissimus Dorsi"
}, {
    q: "What is Second most popular sport in the world?",
    a: "d",
    c1: "soccer",
    c2: "Baseball",
    c3: "Basketball",
    c4: "Cricket"
}];




//
//
//

submitButton.addEventListener("click", function incarcaIntr() {

    startContainer.style.visibility = "hidden";
    quizContainer.style.visibility = "visible";



});
let timeInterval = setInterval(function () {
    timpTp.textContent = catTimp + " seconds remaining";
    catTimp--;


    if (catTimp === 0) {
        timpTp.textContent = "";

        clearInterval(timeInterval);
        endGame();
    }

}, 1000);

puneIntrebari();




function puneIntrebari() {
    let i = 0;
    let questIntr = questions[i];
    let raspunsCorrect = questIntr.a;
    console.log(raspunsCorrect);
    fragen.textContent = questIntr.q;
    aRaspuns.textContent = questIntr.c1;
    console.log(aRaspuns)
    bRaspuns.textContent = questIntr.c2;
    cRaspuns.textContent = questIntr.c3;
    dRaspuns.textContent = questIntr.c4;
}

aRaspuns.addEventListener('click', answerButton);

    function answerButton(){
    let i = 1;
    let questIntr = questions[i];
    let raspunsCorrect = questIntr.a;
    console.log(raspunsCorrect);
    fragen.textContent = questIntr.q;
    aRaspuns.textContent = questIntr.c1;
    console.log(aRaspuns);
    bRaspuns.textContent = questIntr.c2;
    cRaspuns.textContent = questIntr.c3;
    dRaspuns.textContent = questIntr.c4;
    console.log(answerButton);
    console.log(questIntr.c1);
    }

    
cRaspuns.addEventListener('click', answerButton1);

function answerButton1(){
let i = 2;
let questIntr = questions[i];
let raspunsCorrect = questIntr.a;
console.log(raspunsCorrect);
fragen.textContent = questIntr.q;
aRaspuns.textContent = questIntr.c1;
console.log(aRaspuns);
bRaspuns.textContent = questIntr.c2;
cRaspuns.textContent = questIntr.c3;
dRaspuns.textContent = questIntr.c4;
console.log(answerButton);
console.log(questIntr.c1);
}

dRaspuns.addEventListener('click', answerButton2);
function answerButton2(){
    
        sfarsitH.style.visibility = "visible";
        quizContainer.style.visibility = "hidden";
    
    
}

function endGame() {
    sfarsitContainer.style.visibility = "visible";
    quizContainer.style.visibility = "hidden";

}



// bRaspuns.addEventListener('click', answerButton) {


// };
// cRaspuns.addEventListener('click', answerButton) {
//     console.log(raspunsCorrect);

// };
// dRaspuns.addEventListener('click', answerButton) {

//     console.log(questIntr.c4);
// };


// if (raspunsCorrect === true) {

//     console.log(raspunsCorrect);
//     console.log("waht is the value of raspuns Correct"+raspunsCorrect)
// }







