import React from 'react'
import { useState } from 'react'
import'./Modelbox.css';
import phone from "./asset/mern.jpeg"

function Modelbox() {

    const[Model,setModel]=useState(false)

  return (
    <>
    <div>Modelbox</div>
    {Model ? <div className='model'>
        <span> ARE YOUR SURE , DO YOU WANT TO CONTINUE... </span><br/>
        <button classname='ok' onClick={()=>setModel(false)}> OK </button>
    </div> : ""}

    <button classname='head' onClick={()=> setModel(true)}> CONFIRM </button>
    </>
  )
}

export default Modelbox
