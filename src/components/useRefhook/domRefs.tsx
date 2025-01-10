//In useRef hook there is 2 scenarios

import { useEffect, useRef } from "react"

// pass read only ref for DOM element or as mutable value which can behave like instance variable.
// following example for the dom elements.
export const DomRef = () => {

    //useRef hook for dom reference.
    const inputRef = useRef<HTMLInputElement>(null!); // not ! then no need optional chaining in focus.(inputRef.current?.focus();)
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return (
    <>
        useRef hook
        <p>Dom elements</p>
        <input type="text" ref={inputRef}/>
    </>)
}