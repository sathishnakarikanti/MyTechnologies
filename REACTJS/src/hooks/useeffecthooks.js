import React, { useEffect } from "react";

const UseEffectHook = () => {

    useEffect(() => {
        //side effect login here
        return () => {
            //cleanup logic here
        }
    },[]) // dependency is state update logic

return(
    <>
    <h1>useEffectHook</h1>

    <h3>The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, timers, etc. It runs after the component renders and can also run after re-renders when certain dependencies change. In React application some components are need to interact with external system for example we might need to establish to server connection or send some analytical logs wants to appear on the screen or we may want control non react components based on the state of react component or we want to render after the first render or if we want any side effects. </h3>

    <h2>What is side effect ?</h2>
   
    <h3>Side effect is anything might be in our application which is not ready to UI rendering(during the http call nothing happen in the user interface nothing will render that is out of the scope of react.)</h3>
   
   <h3>examples of side effects which do :- </h3>
    <h5>1. HTTP call</h5>
    <h5>2. Browser storage</h5>
    <h5>3. Intervals</h5>
    <h5>4. DOM Manipulation</h5>
    <h5>5. Event Handlers also have side effects.</h5>
    </>
)
}
export default UseEffectHook;
