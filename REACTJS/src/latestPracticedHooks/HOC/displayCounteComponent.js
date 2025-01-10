import React from "react";

const DisplayCounterComponent = ({count, increment}) =>{
    return(
        <>
        <p>Higher Order Component</p>
        <p>counter:{count}</p>
        <button onClick={increment}>+Add</button>
        </>
    )
}

export default DisplayCounterComponent;