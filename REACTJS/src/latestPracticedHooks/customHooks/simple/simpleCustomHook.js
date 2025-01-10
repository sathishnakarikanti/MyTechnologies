import React from "react";
import UseComponentLogic from "./componentLogic";
const SimpleCustomHook = () => {
    const {count, increment, decrement, reset}  = UseComponentLogic(0)
    return(
        <>
        <p>Simple Custom Hook..!</p>
        <p>count :{count}</p><br/>
       <button onClick={increment}>+Add</button> <br/>
       <button onClick={decrement}>-Remove</button><br/>
       <button onClick={reset}>Reset</button>
        </>
    )
}
export default SimpleCustomHook;