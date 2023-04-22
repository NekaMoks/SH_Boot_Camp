// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const instructions_box = document.querySelector(".instructions_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const header_box = document.querySelector(".header_box");

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
}

let questn_count = 0;

// getting questions and options from array
function showQuestions(index) {
    const questn_text = document.querySelector(".questn_text");
    const option_list = document.querySelector(".option_list");
    let questn_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     +  '<div class="option"><span></span></div>'
                     +  '<div class="option"><span></span></div>'
                     +  '<div class="option"><span></span></div>';
    questn_text.innerHTML = questn_tag;
    option_list.innerHTML = option_tag; 
}


