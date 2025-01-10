import React, { useState } from "react";
import Title from "./title";
import Button from "./button";
import Count from "./count";

const UseCallbackHook = () =>{

    const [age, setAge] = useState(50)
    const [salary, setSalary] = useState(100000);

    const incrementAge = () => {
        setAge(age + 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }

    return(
        <>
        <Title/>
        <p>This component is container for the all the components.!</p>
        <Count text='Age' count={age} />
        <Button handleClick={incrementAge} >Increment Age </Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={incrementSalary} >Increment Salary </Button>
        </>
    )
}

export default UseCallbackHook;