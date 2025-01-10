import React, { useState } from "react";
const UseStateHookTheme = () => {
    const [darkThem, handleDarkThem] = useState(false)
    const theme = {
        darkMode:{
            backgroundColor:'black',
            color:"white",
            padding:"20px"
        },
        lightMode:{
            backgroundColor:'white',
            color:"black",
            padding:"20px"
        }
    }
return (
    <>
    Theme change to Dark
    <input type="checkbox" checked ={darkThem} onChange={()=>handleDarkThem(prevState => !prevState)}/>
    <p style={darkThem ? theme.darkMode : theme.lightMode}>useState Hook<br/>
    Usestate hook basically built-in hook in react js this is used to handle the state variables in functional Components.</p>
    </>
)
}

export default UseStateHookTheme;