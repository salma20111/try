"use client";

import { useEffect, useReducer } from "react";
import Button from "../UiElements/Button";
import  handleTime  from "@/helpers/handleTime";

const initialState = {
  time: 0,
  elapsedTime: 0,
  isRunning: false,
  startTime: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      if (state.isRunning) return state;

      return {
        ...state,
        time: 0,
        elapsedTime: 0,
        startTime: Date.now(),
        isRunning: true,
      };

    case "INTERVAL":

      return {
        ...state,
        time: Date.now() - state.startTime + state.elapsedTime,
      };

    case "PAUSE":
      if (!state.isRunning) return state;

      return {
        ...state,
        elapsedTime: state.time,
        isRunning: false,
      };

    case "RESUME":
      if (state.isRunning) return state;

      return {
        ...state,
        startTime: Date.now(),
        isRunning: true,
      };

    case "RESET":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default function StopWatch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const resume = () => dispatch({ type: "RESUME" });
  const reset = () => dispatch({ type: "RESET" });

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      dispatch({ type: "INTERVAL" });
    }, 10);

    return () => clearInterval(interval);
  }, [state.isRunning, state.startTime, state.elapsedTime]);

      const { minutes, seconds , mill } = handleTime(state.time);
 

  return (
    <section>
         <p>{minutes}:{seconds}:{mill}</p> 
         <div>
             {!state.isRunning && !state.elapsedTime ? 
             <Button disabled={state.isRunning} onClick={start}>Start</Button> 
             : <Button disabled={state.isRunning} outline onClick={resume}>Resume</Button> } 
             <Button danger onClick={pause}>Pause</Button> <Button success onClick={reset}>Reset</Button> </div> </section>
  );
}