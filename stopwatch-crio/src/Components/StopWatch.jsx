import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetClick = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const timeFormat = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <h1 className="title">Stopwatch</h1>
        <p className="time">Time: {timeFormat(elapsedTime)}</p>
        <div className="button-container">
          <Button
            variant="contained"
            color={isRunning ? "secondary" : "primary"}
            onClick={startClick}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button variant="contained" color="primary" onClick={resetClick}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
