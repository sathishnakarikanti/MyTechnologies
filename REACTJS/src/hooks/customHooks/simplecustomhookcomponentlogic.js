import React, { useState } from "react";
const Usesimplecomponentlogic = (initialValue=0) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        setCount(count => count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return {increment, decrement, reset, count}
}
export default Usesimplecomponentlogic;