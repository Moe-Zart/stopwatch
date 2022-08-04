function timerStart(){
    let miliseconds = Date.now()
    requestAnimationFrame(updateTimer)
}

function timerStop(){
    
}

function updateTimer(){
    console.log('updateTimer()')
    requestAnimationFrame(updateTimer)
}