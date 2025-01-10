import { useEffect, useRef, useState } from "react"

    //Manage mutable refs with useRef hook.
export const MutableRefs = () => {
    const [count, setCount] = useState(0)
    const intervalRef = useRef<number | null>(null)
    console.log(intervalRef,'current second');


    const stopTimer = () => {
        if(intervalRef.current) window.clearInterval(intervalRef.current)
            console.log(intervalRef.current,'current one');
    }
    useEffect(()=>{
        intervalRef.current = window.setInterval(() =>{
            console.log('second execution is done...!')
            setCount(prevState => prevState + 1);
        },1000)
        return () => {
            console.log('first execution is done...!')
            stopTimer()
        }

    },[])
    return (
        <>
                <p>Mutable elements</p>
                <p>{count}</p>
                <button onClick={() => stopTimer()}>Stop Timer</button>
        </>
    )
}