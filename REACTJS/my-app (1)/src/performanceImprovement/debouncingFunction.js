import React, { useState } from "react";

const DebounceFunction = () => {
    const [searchKeys, setSearchKeys] = useState('');

    const debounce = (func, delay) => {
    let timeOut ;
    return (...args) => {
            clearTimeout(timeOut);
            timeOut =  setTimeout(()=> func(...args), delay);
        };
   }
    const handleSearch = debounce(
        (e) => {}, 3000)

    return(
    <>
    <h1>Debounce Function</h1>
    <form>
        <input type="text" 
        name = "searchKeys" 
        value = {searchKeys} 
        onChange={(e)=> {
            handleSearch(e);  
            setSearchKeys(e.target.value)
    }
        } />
    </form>
    </>
)
}
export default DebounceFunction;





const  debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func(...args)},delay)
    }
}
debounce(()=> {}, 3000)


const  debouncing = (func, delay) => {
    let timeOut 
    return (...args) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{func(...args)}, delay)
    }
}
debouncing(()=> {}, 2000);


const doSomeOpe = () => {
console.log('callback')
}
const callbackDun = ((num, callback)=> {
    console.log(num)
    return callback;
})
callbackDun(1, doSomeOpe)