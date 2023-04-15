import React, { useState } from 'react';


function PomodoroTimer() {

    let pomodoro= "25:00";
    let time = 25*60; // 25mins  
    //timer value
    const [timer_display, setDisplay] = useState(pomodoro)
    

    const startTimer = () => {
        console.log('CLick')
        setInterval(updateTimer, 1000)
    }

    const updateTimer = () => {
        let minutes = Math.floor(time/60)
        let seconds = time % 60
        setDisplay(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
        console.log(timer_display)
        //document.getElementById("timer-display")?.textContent = timer_display
        if (time == 0) {
            alert("times up")
            clearInterval
        }else{
            time--
        }

    }
    return (
        <h1 onClick={startTimer} id="timer-display">{timer_display}</h1>
    ); 

}
export default PomodoroTimer