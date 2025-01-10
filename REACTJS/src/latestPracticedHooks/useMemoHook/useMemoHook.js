import React, { useMemo, useState } from "react";
import UseMemoHookUsersList from "./useMemoHookUsersList";

const UseMemoHook = () => {
    
    let usersList = [
        {id:1, name:'aaa'},
        {id:2, name:'bbb'},
        {id:3, name:'ccc'},
        {id:4, name:'ddd'}
    ]
    const [users, handleUsers] = useState(usersList);
    const [counter, handleCounter] = useState(1)

    let allUsers = useMemo(() =>
        users.map((obj)=> {
        console.log('printing number of times....!')
        return <UseMemoHookUsersList user= {obj.name}/>
        }),[users] ) 
 
    const handleChange = (value) => {
        console.log(value,'value');
        handleUsers((prevState) => ( [...prevState, {id:users.length+1, name:value}]))
    }

    return(
    <>
    <p>useMemo hook</p>
    <p>Memoization in javascript :-  Memoization is the technique of storing the result of computational or expensive operations </p>
    <p>In react there is two hooks are dedicated designed for memoization.</p>
    <p>1. useMemo()</p>
    <p>2. useCallback()</p><br/>
    <p>Example of useMemo hook</p><br/>
    <button onClick={()=>{handleCounter(prev => prev + 1)}}>+Add</button><br/>
    <p>{counter}</p><br/>
    <input type="text" onBlur={(e) => handleChange(e.target.value)}/>
    {allUsers}
    {/* { users.map((obj)=>{
        console.log('printing number of times....!')
       return<UseMemoHookUsersList user= {obj.name}/>
    })} */}
    </>
 )
}
export default UseMemoHook;