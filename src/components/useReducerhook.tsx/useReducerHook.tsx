//use state hook is used for handling the simple state values but when we want to use complex state values like our next state value is depending on the previous state then we can go with the useReducer hook.

import { useReducer } from "react";

interface CounterState  {
  count: number;
}
interface UpdateAction  {
    type : 'Increment' | 'Decrement'
    payload : number
}
interface ResetAction  {
    type: 'Reset'
}
type CounterAction = UpdateAction | ResetAction
let initialState = {
  count: 0,
};
const reducer = (state: CounterState, action: CounterAction) => {
    // console.log("two")
  switch (action.type) {
    case "Increment":  return { count: state.count + action.payload };
    case "Decrement": return { count: state.count - action.payload };
    case "Reset": return initialState;
    default: return state;
  }
};

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      useReducer hook
      <p>{state.count}</p>
      {/* {console.log("one")} */}
      <button onClick={() => dispatch({ type: "Increment", payload: 10 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 10 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
    </>
  );
};
