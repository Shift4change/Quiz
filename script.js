
var startContainer = document.getElementById("bun-venit");
let quizContainer = document.getElementById("contain-quiz")
let submitButton = document.getElementById("submit");
let timpTp = document.getElementById("timp");
let fragen = document.getElementById("intrebari");
let aRaspuns = document.getElementById("choice-A");
let bRaspuns = document.getElementById("choice-B");
let cRaspuns = document.getElementById("choice-C");
let dRaspuns = document.getElementById("choice-D");
let sfarsitContainer = document.getElementById("sfarsit");
var catTimp = 60;
//
//
//
// 

var questions = [{
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



   
    var timeInterval = setInterval(function () {
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
        var i = 0;
        var questIntr = questions[i];
        var raspunsCorrect = questIntr.a;
        console.log(raspunsCorrect);
        fragen.textContent = questIntr.q;
        aRaspuns.textContent = questIntr.c1;
        bRaspuns.textContent = questIntr.c2;
        cRaspuns.textContent = questIntr.c3;
        dRaspuns.textContent = questIntr.c4;

        aRaspuns.addEventListener('click', function () {
            
            console.log(questIntr.c1);
        });
        bRaspuns.addEventListener('click', function () {
            

        });
        cRaspuns.addEventListener('click', function () {
          

        });
        dRaspuns.addEventListener('click', function () {
            
            console.log(questIntr.c4);
        });


        if (raspunsCorrect === true) {
            console.log(raspunsCorrect);
        }
    }


  

    function endGame() {
        sfarsitContainer.style.visibility = "visible";
        quizContainer.style.visibility = "hidden";

    }
    
});
