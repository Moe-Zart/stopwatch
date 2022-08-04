const timerMilliseconds = document.querySelector(".timer__milliseconds")
const timerSeconds = document.querySelector(".timer__seconds")
const timerMinutes = document.querySelector(".timer__minutes")
let cancelId;
let time;
function timerStart(){
    time = Date.now()//
    cancelId = requestAnimationFrame(updateTimer)
    //requestAnimationFrame calls a function for every frame of your browser
    // in the parenthesis, pass in the function you want to loop over
}

function timerStop(){
    cancelAnimationFrame(cancelId)
}

function updateTimer(){
    let millisecondsEllapsed = Date.now()-time
    let secondsEllapsed = Math.floor(millisecondsEllapsed/1000)
    if (secondsEllapsed>=0 && secondsEllapsed<10){
        secondsEllapsed = '0'+ secondsEllapsed
    }
    
    timerMilliseconds.innerHTML = millisecondsEllapsed % 1000
    timerSeconds.innerHTML = secondsEllapsed
    cancelId = requestAnimationFrame(updateTimer)
    //repeat the same animation frame function here
}
