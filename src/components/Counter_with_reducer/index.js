import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import ACTION_TYPES from "./../../actions/actionTypes"

const initialState = { value: 10 };

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_INCREMENT:
      return { value: state.value + 1 };
    case ACTION_TYPES.COUNTER_DECREMENT:
      return { value: state.value - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1> Count: {state.value}</h1>
      <button onClick={() => dispatch({ type: ACTION_TYPES.COUNTER_DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.COUNTER_INCREMENT })}>+</button>
    </div>
  );
}

export default Counter;