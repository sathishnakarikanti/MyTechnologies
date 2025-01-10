import React from "react";

// Advanced props
interface HandleButtonInterface  {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void;  // This allows for any valid React content
}
export const Button = (props: HandleButtonInterface) => {
    return (
    <button onClick={event => props.handleClick(event,1)}>click</button>
);
}

interface HandleInterfaceInterface {
    handleInput : (event: React.ChangeEvent<HTMLInputElement>) => void;
    value : string,
    name : string,
    placeholder : string ,
    firstName: string
}
export const Input = (props:HandleInterfaceInterface) => {
    return (
        <>
    <input type="text" onChange={event => props.handleInput(event)} name={props.name} value={props.value}></input><span>{props.firstName}</span>
    </>)
}

