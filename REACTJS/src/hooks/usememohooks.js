import React, { useMemo, useState } from "react";
import UsememoChildComp from "./usememochildcomponent";
const Usememohook = () => {
    const users = [{id:1, name:'sathish'}, 
                   {id:2, name:'Pranith'},
                   {id:2, name:'Rohit'},
                   {id:2, name:'Anirudh'}]
    const [allUsers, setAllUsers] = useState(users);
    const [count, setCount] = useState(0);
    const [factCount, setFactCount] = useState(0)

    const updateUsers = useMemo(()=>
        allUsers.map((obj, index) => {
            console.log(obj.name,'obj')
            return <UsememoChildComp user ={obj.name} key={index}/>
        })
    , [allUsers])
    
    const  handleInputChange = (e) => {
        setAllUsers(prevState => {
            return [...prevState, { id:allUsers.length+1, name:e.target.value}]})
        }

    const handleClick = (e) => {
        setCount(count => count+1)
    }

    const factorial = (count) => {
        if([0,1].includes(count)){
            return 1
        }else{
            return count * factorial(count-1);
        }
    }
    useMemo(() => {
        let count  = factorial(5);
        console.log(count,'count')
        setFactCount(count)
    },[])

    return (
        <>
        <h1>UseMemo hook</h1>
        <button onClick={handleClick}>click</button>
        <p>Total count : {count} </p>
        <p>Factorial Count : {factCount} </p>
        <input type="text" onBlur={(e)=>handleInputChange(e)}/>
        {updateUsers}
        </>
    )
}
export default Usememohook;