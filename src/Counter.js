import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    //with dependencies
    // useEffect(()=>{
    //     console.log("count button is pressed")
    // }, [count])
    //without dependencies
    // useEffect(()=>{
    //     document.title ="counter";    
    //     console.log(" s redering")
    // }, [])
    //emtpy dependencies
    // useEffect(()=>{
    //     console.log("every time ")
    // },)

    function timeout(){
        setTimeout(
            () =>{
                console.log("test")
            },3000
        )
    }
    function interval(){
        setInterval(
            () =>{
                console.log("interval")
            },500
        )
    }
  return (
    <>
    <div>
        <h1> count :{count}</h1>
        <button onClick={() => setCount(count+1)}>INCREMENT</button>
        <button onClick={() => setCount(count-1)}>DESCREMENT</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <button onClick={timeout}>out </button>
        <button onClick={interval}>in </button>
    </div>
    </>
  )
}

export default Counter
