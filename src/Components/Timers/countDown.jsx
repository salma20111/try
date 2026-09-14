"use client";

import handleTime from "@/helpers/handleTime";
import { useEffect, useState } from "react";
import Button from "../UiElements/Button";

const now = Date.now()

export default function Countdown({ duration = 20_000 , running, control}) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [endTime, setEndTime] = useState(running ? now + duration : null);
  const [isRunning, setIsRunning] = useState(running);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const remaining = Math.max(endTime - Date.now(), 0);
      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        setIsRunning(false);
        console.log("Finish");
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, endTime]);

  const start = () => {
    setIsRunning(true);
    setEndTime(Date.now() + duration);
    setTimeLeft(duration);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const resume = () => {
    setEndTime(Date.now() + timeLeft);
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    setEndTime(null);
  };

  const { minutes, seconds, mill } = handleTime(timeLeft);

  return (
    <div>
      <p>
        {minutes}:{seconds}.{mill}
      </p>

      {control && <div>
        <Button disabled={!control} success onClick={start}>
          Start
        </Button>
        <Button disabled={!control}  outline onClick={resume}>
          Resume
        </Button>
        <Button disabled={!control}  danger onClick={pause}>
          Pause
        </Button>
        <Button disabled={!control}  onClick={reset}>Reset</Button>
      </div>}
    </div>
  );
}