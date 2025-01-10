import React, { useState } from "react";

const UseComponentLogic = (intialValue = 0) =>{
const [count, setCount] = useState(intialValue);

const increment = () => {
setCount(prevState => prevState + 1 )
}

const decrement = () => {
setCount(prevState => prevState - 1)
}

const reset = () => {
      setCount(0)
    }
    
return {count, increment, decrement, reset}
}

export default UseComponentLogic;