// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const instructions_box = document.querySelector(".instructions_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const header_box = document.querySelector(".header_box");
const timeCount = header_box.querySelector(".timer .timer_sec");

const option_list = document.querySelector(".option_list");

// If Start Quiz Button is clicked
start_btn.onclick = () => {
    instructions_box.classList.add("activeInstructions"); // show the instructions box
}

// If Exit Button is clicked
exit_btn.onclick = () => {
    instructions_box.classList.remove("activeInstructions"); // hide the instructions box
}

// If Continue Button is clicked
continue_btn.onclick = () => {
    instructions_box.classList.remove("activeInstructions"); // hide the instructions box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0);
    questnCounter(1);
    startTimer(timeValue);
}

let questn_count = 0;
let questn_numb = 1;
let counter;
let timeValue = 60;

const next_btn = quiz_box.querySelector(".next_btn");

// If Next Button is clicked
next_btn.onclick = () => {
    if (questn_count < questions.length - 1) {
        questn_count++;
        questn_numb++;
        showQuestions(questn_count);
        questnCounter(questn_numb);
        clearInterval(counter);
        startTimer(timeValue);
    } else {
        console.log("Questions completed successfully");
    }  
}

// getting questions and options from array
function showQuestions(index) {
    const questn_text = document.querySelector(".questn_text");
    let questn_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     +  '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     +  '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     +  '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questn_text.innerHTML = questn_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questn_count].answer;
    let allOptions = option_list.children.length;
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // If the answer is incorrect then automatically select the correct answer
        for (let i = 0; i < allOptions.length; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    // Once user selected disable all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;  
    }
}


function questnCounter(index) {
    const bottom_questn_counter = quiz_box.querySelector(".total_questn");
    let totalQuestnCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_questn_counter.innerHTML = totalQuestnCountTag;
}


