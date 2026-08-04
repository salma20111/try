"use client";

import { useReducer, useState } from "react";
import Button from "@/Components/UiElements/Button";

import classes from "./page.module.css";
const initialState = 0;
const MAX = 10;
const MIN = 0;
const AMOUNT  = 2;

const reducer = (state, action) => {
  const { type , amount} = action ;

  switch(type) {
    case 'INCREMENT' :
      return state >= MAX ? state : state + 1;
    case 'DECREMENT' :
      return state <= MIN ? state : state - 1;
    case 'RESET' :
      return initialState;
    case 'INCREASE' :
      return state >= MAX ? state : state + amount;
    default:
      return state;
  }
};

export default function BlogPage() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [showList, setShowList] = useState(true);

  const increaseCount = () => dispatch({type: "INCREMENT"});
  const decreaseCount = () => dispatch({type: "DECREMENT"});
  const increase = () => dispatch({type: "INCREASE", amount:AMOUNT});
  const resetCount = () => dispatch({type: "RESET"});

  const toggleMenu = () => setShowList((prev) => !prev);

  return (
    <section>
      <h2>Blog Page</h2>
      <div> 
        <p>{count}</p>

        <section className={classes["actions"]}>
          <Button onClick={increaseCount} disabled={count >= MAX}>
            +
          </Button>
          <Button onClick={decreaseCount} outline disabled={count <= MIN}>
            -
          </Button>
        <Button onClick={increase} disabled={count >= MAX}> +{AMOUNT} </Button>
          <Button onClick={resetCount} danger disabled={count === MIN}>
            Reset
          </Button>
        </section>
      </div>

      <br />
      <hr />
      <br />

      <div>
        <Button onClick={toggleMenu} danger={showList}>
          {showList ? "Hide" : "Show"} Menu
        </Button>



        <ul
          className={`${classes["list"]} ${
            !showList ? classes["hide-list"] : ""
          }`}
        >
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </section>
  );
}
