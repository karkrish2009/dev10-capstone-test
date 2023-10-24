
import React, { useState, useEffect, Fragment } from "react";
import "../App.css";
import Timer from "./Timer.js";
import ControlButtons from "./ControlButtons.js";
 
function CountdownClock() {

    const finalTime = 3000;
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
 
    useEffect(() => {
        let interval = null;
 
        let currentTime = finalTime;

        if ((isActive && isPaused === false)) {
            interval = setInterval(() => {      
                if (currentTime >= 1000) {
                    setTime((time) => time - 1000);
                    currentTime = currentTime - 1000;
                }
                else {
                    setIsActive(false);
                    setTime(0);
                    clearInterval(interval);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);
 
    const handleStart = () => {
        setTime(finalTime);
        setIsActive(true);
        setIsPaused(false);
    };
 
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
 
    const handleReset = () => {
        setIsActive(false);
        setTime(finalTime);
    };
 
    return (
        <div className="timer-container">
            
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
          
        </div>
    );
}
 
export default CountdownClock;

