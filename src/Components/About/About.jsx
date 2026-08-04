"use client";

import { useEffect, useReducer, useState } from "react";
import Button from "../UiElements/Button";


const initialState = {
  score: 0,
  lives: 3,
  level: 1,
};


const reducer = (state, action) => {
  const {type, amount} = action;

  switch (type) {
    case ADD_SCORE:
      return { ...state, score: state.score + amount }
    case LOSE_SCORE:
      return { ...state, score: Math.max(0, state.score - amount) }
      // Math.max 
    case ADD_LIVES:
      return { ...state, lives: state.lives + amount }
    case LOSE_LIVES:
      return { ...state, lives: Math.max(0, state.lives - amount) }
    case ADD_LEVEL:
      return { ...state, level: state.level + amount }
    case LOSE_LEVEL:
      return { ...state, level: Math.max(1, state.level - amount) }
    default:
      return state;
  }
}
const About = () => {

 const [state, dispatch] = useReducer(reducer, initialState)

 const addScore = () => dispatch({type: 'ADD_SCORE', amount: 10});
 const loseScore = () => dispatch({type: 'LOSE_SCORE', amount: 10});
 const addLives = () => dispatch({type: 'ADD_LIVES', amount: 1});
 const loseLives = () => dispatch({type: 'LOSE_LIVES', amount: 1});
 const addLevel = () => dispatch({type: 'ADD_LEVEL', amount: 1});
 const loseLevel = () => dispatch({type: 'LOSE_LEVEL', amount: 1});
  return (
    <div>
      <h2>About</h2>
      <p>Score: {state.score}   lives: {state.lives}  Level:{state.level}</p>
      <section>
        <Button onClick={addScore}>Score +</Button>
        <Button onClick={loseScore} danger>Score -</Button>
        <Button onClick={addLives}>Live +</Button>
        <Button onClick={loseLives} danger>Live -</Button>
        <Button onClick={addLevel}>Level +</Button>
        <Button onClick={loseLevel} danger>Level -</Button>
      </section>
    </div>
  );
};

export default About;
