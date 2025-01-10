import React from "react";

const UseEffectHook = () => {
    return(
        <>
        <h1>useEffectHook</h1>
        <h3>In React application some components are need to interact with external system for example we might need to establish to server connection or send some analytical logs wants to appear on the screen or we may want control non react components based on the state of react component or we want to render after the first render or if we want any side effects. </h3>

        What is side effect ?
       
        Side effect is anything might be in our application which is not ready to UI rendering(during the http call nothing happen in the user interface nothing will render that is out of the scope of react.)
       
       examples of side effects which do :- 
        1. HTTP call
        2. Browser storage
        3. Intervals
        4. DOM Manipulation
        5. Event Handlers also have side effects.
        
        </>
    )
}
export default UseEffectHook;