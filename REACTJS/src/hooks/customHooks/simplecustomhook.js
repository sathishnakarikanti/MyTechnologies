import React from "react";
import Usesimplecomponentlogic from "./simplecustomhookcomponentlogic";

const Simplecustomhook = () => {
    const {increment, decrement, reset, count} = Usesimplecomponentlogic();
    return (
        <>
        <h1>Simple Custom hook</h1>
        <p>count: {count}</p><br/>
        <button onClick={increment}>Increment</button><br/><br/>
        <button onClick={decrement}>Decrement</button><br/><br/>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Simplecustomhook;