document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navbarButton = document.getElementById('navbarButton');

    hamburgerMenu.addEventListener('click', function() {
        if (navbarButton.style.display === 'flex') {
            navbarButton.style.display = 'none';
        } else {
            navbarButton.style.display = 'flex';
        }
    });

    const materialButton = document.getElementById('materialButton');
    const exercisesButton = document.getElementById('exercisesButton');
    const forumButton = document.getElementById('forumButton');

    materialButton.addEventListener('click', function() {
        showContent('material');
    });

    exercisesButton.addEventListener('click', function() {
        showContent('exercises');
    });

    forumButton.addEventListener('click', function() {
        showContent('forum');
    });

    function showContent(content) {
        const materialContainer = document.getElementById('material');
        const exercisesContainer = document.getElementById('exercises');
        const forumContainer = document.getElementById('forum');

        materialContainer.style.display = 'none';
        exercisesContainer.style.display = 'none';
        forumContainer.style.display = 'none';

        if (content === 'material') {
            materialContainer.style.display = 'flex';
        } else if (content === 'exercises') {
            exercisesContainer.style.display = 'flex';
        } else if (content === 'forum') {
            forumContainer.style.display = 'flex';
        }
    }


    const materialContainer = document.getElementById('material');
    materialContainer.style.display = 'flex';
});

const questions = [
    {
        question: "Solve the inequality: 3x + 5 > 8. What is the solution?",
        answers: [
            { text : "x > 1", correct: true},
            { text : "x > 3", correct: false},
            { text : "x < 1", correct: false},
            { text : "x > 3", correct: false},
            { text : "x = 3", correct: false},
        ]
    },
    {
        question: "If 2x -7 ≤ 5, what is the possible range of values for x?",
        answers: [
            { text : "x ≤ 6", correct: false},
            { text : "x ≥ -1", correct: true},
            { text : "x ≥ 6", correct: false},
            { text : "x ≤ 1", correct: false},
            { text : "x = 1", correct: false},
        ]
    },
    {
        question: "Solve the compound inequality: 2 < 3x + 4 ≤ 10. What is the solution set?",
        answers: [
            { text : "2 < x ≤ 2", correct: false},
            { text : "2 < x ≤ 6", correct: false},
            { text : "2 ≤ x < 6", correct: true},
            { text : "2 ≤ x ≤ 6", correct: false},
            { text : "2 ≤ x < 2", correct: false},
        ]
    },
    {
        question: "What is the solution to the inequality 2/3x - 4 > 1?",
        answers: [
            { text : "x > 9", correct: false},
            { text : "x > 10", correct: false},
            { text : "x < 9", correct: false},
            { text : "x < 10", correct: true},
            { text : "x = 10", correct: false},
        ]
    },
    {
        question: "Solve the inequality: -2(x - 3) ≥ 6. What is the solution set?",
        answers: [
            { text : "x ≤ 0", correct: false},
            { text : "x ≥ 0", correct: false},
            { text : "x ≤ 6", correct: false},
            { text : "x ≥ 6", correct: true},
            { text : "x ≤ -6", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currQuestion = questions[currentIndex];
    let questionNum = currentIndex + 1;
    questionElement.innerHTML = questionNum + '. ' + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();

function addComment() {
    var commentInput = document.getElementById("comment-input").value;
    var commentsContainer = document.getElementById("comments-container");

    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    var detailsElement = document.createElement("div");
    detailsElement.classList.add("details");

    var imgElement = document.createElement("img");
    imgElement.src = "/assets/profile.jpg"; 
    detailsElement.appendChild(imgElement);

    var nameElement = document.createElement("h3");
    nameElement.textContent = "chae"; 
    detailsElement.appendChild(nameElement);


    var commentContentElement = document.createElement("p");
    commentContentElement.textContent = commentInput;
    detailsElement.appendChild(commentContentElement);

    commentElement.appendChild(detailsElement);

    commentsContainer.appendChild(commentElement);

    document.getElementById("comment-input").value = "";
}



