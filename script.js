const btnStart = document.getElementById('quiz-start');
 const footer = document.querySelector('.footer');
 const nextButton = document.querySelector('#next');
 const quizWrapper = document.querySelector('.quiz__wrapper'); 
 const quizBox = document.querySelector('.quiz__box'); 
 const quizQuestion = document.querySelector('.quiz__heading');
 const quizList = document.querySelector('.quiz__options'); 
 const quiz = document.querySelector('.quiz');
 const quizEnd = document.querySelector('#quiz__end');
 const score = document.querySelector('.quiz__score');
 let counter = document.querySelector('.quiz__counter');
 console.log(counter); 
 let points = 0,  
 currentQuestion = 1; 

let sortQuestions,
    currentIndex; 
  
function startQuiz () {
    quizWrapper.classList.add('hide'); 
     
    setTimeout(() => {
        footer.classList.remove('footer-fix'); 
        quizBox.classList.remove('hide');   
    }, 500);  
    
    currentIndex = 0; 
    points = 0; 
    sortQuestions = questions.sort( () => {
        return Math.random() - .5;  
    });
    nextQuesiton();  

    
}

const resetState = () => {
    nextButton.classList.add('hide');
    if (quizList.firstChild) {
        quizList.innerHTML = "";  
    }
     
}

const nextQuesiton = () => {
    resetState();
    showQuestions(sortQuestions[currentIndex]);   
}



const showQuestions = (question  => {
    quizQuestion.textContent = question.question; 
    question.answers.forEach(answer => {
        const button = document.createElement('button'); 
        button.innerHTML = answer.option; 
        button.classList.add('quiz__options-list');
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer); 

        quizList.appendChild(button);  
        
    });

    counter.innerText = `Q: ${(currentIndex + 1)} / ${sortQuestions.length}`
}); 



const checkAnswer = (event) => {
    selectedOption = event.target;
    correct = selectedOption.dataset.correct;
    if (correct) {
        
        points += 1; 
        score.textContent = `Score: ${points}`;
        
        console.log(score); 
    } 


    Array.from(quizList.children).forEach(button => {
        setStatus(button, button.dataset.correct); 
    }); 

    

    if (sortQuestions.length > currentIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults(); 
    }



}

const setStatus = (element, correct) => {
    clearStatus(element); 
    if (correct) { 
        element.classList.add('correct'); 
    } else {
        element.classList.add('wrong');  
    }


}

const clearStatus = (element) => {
    element.classList.remove('correct');
    element.classList.remove('wrong'); 
}

const showResults = () => {

    quiz.innerHTML = "";
    footer.classList.add('footer-fix');
    document.body.classList.add('body-flex');
    const markup = `
    <div class="quiz__end quiz-margin">
        <h1 class="end__heading-1">Game Over!</h1>
        <h2 class="end__heading-2">
        Your score is: 
        </h2>
        <p class="score">${points}</p>
        <button id="btn__reload" class="btn__reload next">
            <a href ="index.html"> Return to homepage</a>
        </button>
    </div>
    `;

    quiz.insertAdjacentHTML('afterbegin', markup);
    
    document.getElementById('btn__reload').addEventListener('click', () => {
        window.location.reload(); 
    }); 
   
}

 /*****************************************************************
  * Questions
  */

 const questions = [
    
    {
        question: "What is the full meaning of CPU?",
        answers: [
            {option: 'Central process unit', correct: false},
            {option: 'Central Programming Unit', correct:false},
            {option: 'Central Processing Unit',  correct: true}
        ]  
    }, 
    
    
    
    {   
        question: `Which is an example of camelCasing in JavaScript?`,
        answers:  [
            {option: 'Script name', correct: false},
            {option: 'scriptname', correct: false},
            {option: 'scriptName', correct: true},
        ]
        
        
    },
    
    { 
        question: "The following are type of CSS except?",

        answers:  [  
            {option: "Implicit", correct: true},
            {option: "External", correct: false},
            {option: "Inline", correct: false},
            
        ]  


    },
     
    
    { 
        question: "If JS is javaScript what does TS stand for?", 

        answers: [  
            {option: "Typesript", correct: false},
            {option: "TypeScript", correct: true},
            {option: "typescript", correct: false},
        ]  

    },
    
    { 
        question: "if <br> is for line break what does <wbr> means",

        answers: [  
            {option: "word break routine", correct: false},
            {option: "word break", correct: false},
            {option: "word break opportunity",  correct: true}
        ]  
    }

]



/*************************************
 * EVENT LISTENERS
 */

btnStart.addEventListener('click', startQuiz); 
nextButton.addEventListener('click', () => {
    currentIndex++;
    nextQuesiton();  
});



const date = new Date().getFullYear();
document.querySelector('#year').innerHTML = date;  
