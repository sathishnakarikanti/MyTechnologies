import React, { useState } from "react";

const HigherOrderComponentTest = (DisplayCounterComponent) => {

    const EnhancedComponent = () => {
        const [count, handleCount] = useState(0);
       
        const incrementCount = () => {
            handleCount(count + 1)
        }
        return <DisplayCounterComponent count={count} increment={incrementCount}/>
    }

    return EnhancedComponent;

}

export default HigherOrderComponentTest;
