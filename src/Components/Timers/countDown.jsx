
"use client";

import { useEffect, useReducer } from "react";
import Button from "../UiElements/Button";
import handleTime from "@/helpers/handleTime";


const reducer = (state, action) => {
   const {type, duration,initialState} = action;
   switch (type) {
     case "START":
       if (state.isRunning) return state;

       return {
         ...state,
         isRunning: true,
         endTime: Date.now() + duration,
         timeLeft: duration,
       };

     case "INTERVAL": {
       const remaining = Math.max(
         state.endTime - Date.now(),
         0
       );

       return {
         ...state,
         timeLeft: remaining,
       };
     }

     case "INTERVALNOT":
       return {
         ...state,
         isRunning: false,
         timeLeft: 0,
       };

     case "PAUSE":
       if (!state.isRunning) return state;

       return {
         ...state,
         isRunning: false,
       };

     case "RESUME":
       if (state.isRunning) return state;

       return {
         ...state,
         isRunning: true,
         endTime: Date.now() + state.timeLeft,
       };

     case "RESET":
       return {
         ...initialState,
       };

     default:
       return state;
   }
 };

export default function CountDown({ duration = 20_000 }) {
  const initialState = {
    timeLeft: duration,
    endTime: null,
    isRunning: false,
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  const { timeLeft, endTime, isRunning } = state;

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const remaining = Math.max(
        endTime - Date.now(),
        0
      );

      dispatch({ type: "INTERVAL" });

      if (remaining <= 0) {
        clearInterval(interval);
        dispatch({ type: "INTERVALNOT" });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, endTime]);

  const start = () => dispatch({ type: "START" ,duration});

  const pause = () => dispatch({ type: "PAUSE",duration });

  const resume = () => dispatch({ type: "RESUME",duration });

  const reset = () => dispatch({ type: "RESET",initialState });

  const { minutes, seconds, mill } = handleTime(timeLeft);

  return (
    <section>
      <p>
        {minutes}:{seconds}.{mill}
      </p>

      <div>
        <Button disabled={isRunning} onClick={start}>
          Start
        </Button>

        <Button
          disabled={isRunning || timeLeft <= 0}
          outline
          onClick={resume}
        >
          Resume
        </Button>

        <Button
          disabled={!isRunning}
          danger
          onClick={pause}
        >
          Pause
        </Button>

        <Button success onClick={reset}>
          Reset
        </Button>
      </div>
    </section>
  );
}

