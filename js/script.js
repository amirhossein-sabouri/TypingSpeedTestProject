
// const timerIndicator = document.querySelector(".timer");
// const testArea = document.querySelector("#test-area");
// const originText = document.querySelector("#origin-text p").innerHTML;
// const testWraper = document.querySelector(".test-wrapper");
// const resetButton = document.querySelector("#reset");
// const change_text_btn = document.querySelector(".change-text");
// const count_clicks = document.querySelector(".count_click");

// var timer = [0, 0, 0, 0];
// var timerStarted = false;
// var interval;
// let count = 0;
// function timing() {
//     let currentTime = belowTen(timer[0]) + ":" + belowTen(timer[1]) + ":" + belowTen(timer[2]);         
//     timerIndicator.innerHTML = currentTime;
//     timer[3]++;
//     timer[0] = Math.floor(timer[3] / 100 / 60);
//     timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
//     timer[2] = timer[3] - (timer[1] * 100) - (timer[0] * 6000);
// }

// function belowTen(time) {
//     if (time < 10) {
//         time = "0" + time;
//     }
//     return time;
// }

// function spellCheck(){
//     let textEntered = testArea.value;
//     let originTextMatch = originText.substring(0,textEntered.length);
//     if(textEntered == originText){
//         testWraper.style.borderColor = "green";
//         clearInterval(interval);
//     }else if(textEntered == originTextMatch){
//         testWraper.style.borderColor = "yellow";
//     }else{
//         testWraper.style.borderColor = "red";
//     }
//     }

// function reset(){
//     clearInterval(interval);
//     interval = null;
//      timer = [0, 0, 0, 0];
//      timerStarted = false;
//      testArea.value = "";
//      timerIndicator.innerHTML = "00:00:00";
//      testWraper.style.borderColor = "grey";
// }

// function start() {
//     let textEnteredLength = testArea.value.length;
//     if (textEnteredLength === 0 && !timerStarted) {
//         timerStarted = true; // Set the flag to true
//        interval =  setInterval(timing, 10);   
//     }
// }

// function changeText(count) {
//     const sample_texts = ['The sample short text.','Spring is a vibrant season that marks the transition from the cold, dormant winter to the warmth and renewal of life','Snow not only brings joy and excitement, inviting people to engage in activities like skiing, snowboarding, and building snowmen, but it also plays a crucial role in the ecosystem by providing insulation for plants and replenishing water sources as it melts.','It involves writing code in various programming languages, such as Python, Java, or C++, each with its own syntax and use cases.',' The discipline requires logical thinking, problem-solving skills, and creativity, as programmers must break down complex issues into manageable components.'];
//     originText.textContent = sample_texts[count];
//     count++;
// }

// testArea.addEventListener("keypress", start);
// testArea.addEventListener("keyup",spellCheck);
// resetButton.addEventListener("click",reset);
// change_text_btn.addEventListener("click",changeText(count));


const timerIndicator = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const testWraper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");
const change_text_btn = document.querySelector(".change-text");
const count_clicks = document.querySelector(".count_click");

var timer = [0, 0, 0, 0];
var timerStarted = false;
var interval;
let count = 0;

function timing() {
    let currentTime = belowTen(timer[0]) + ":" + belowTen(timer[1]) + ":" + belowTen(timer[2]);         
    timerIndicator.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor(timer[3] / 100 / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = timer[3] - (timer[1] * 100) - (timer[0] * 6000);
}

function belowTen(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.textContent.substring(0, textEntered.length);
    if (textEntered === originText.textContent) {
        testWraper.style.borderColor = "green";
        clearInterval(interval);
    } else if (textEntered === originTextMatch) {
        testWraper.style.borderColor = "yellow";
    } else {
        testWraper.style.borderColor = "red";
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerStarted = false;
    testArea.value = "";
    timerIndicator.innerHTML = "00:00:00";
    testWraper.style.borderColor = "grey";
}

function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerStarted) {
        timerStarted = true; // Set the flag to true
        interval = setInterval(timing, 10);   
    }
}

function changeText() {
    const sample_texts = [
        'The sample short text.',
        'Spring is a vibrant season that marks the transition from the cold, dormant winter to the warmth and renewal of life.',
        'Snow not only brings joy and excitement, inviting people to engage in activities like skiing, snowboarding, and building snowmen, but it also plays a crucial role in the ecosystem by providing insulation for plants and replenishing water sources as it melts.',
        'It involves writing code in various programming languages, such as Python, Java, or C++, each with its own syntax and use cases.',
        'The discipline requires logical thinking, problem-solving skills, and creativity, as programmers must break down complex issues into manageable components.'
    ];
    
    if (count < sample_texts.length) {
        originText.textContent = sample_texts[count];
        count++;
    } else {
        count = 0; // Reset count if it exceeds the array length
        originText.textContent = sample_texts[count];
        count++;
    }
}

testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);
change_text_btn.addEventListener("click", changeText);
