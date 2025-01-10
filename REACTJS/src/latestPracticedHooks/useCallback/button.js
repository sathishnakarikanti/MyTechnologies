import React from "react";

const Button = ({handleClick, children}) =>{
    console.log('Button component..!', children);
    return(
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;