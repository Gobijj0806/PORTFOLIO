import React from 'react'
import { useState } from 'react'

const Test2 = () => {

  const [open,setopen]=useState(0);
  
      function Toggel(){
  
          setopen(open == 0 ? 1 : 0)
  
      }
  const [data,setData]=useState("");
function change(e){

  setData(e.target.value)
}
    
  

  return (
    <>
    <h3> THEME CHANGER </h3>
    <div  
  
    style={{background:open ? "gray" : "white" ,height:"100vh"}}>
            
        <span onClick={Toggel}>{open ? "☀️" : "🌙"}</span><br/>

        <h3> CHARACTERS COUNTER </h3>
         ENTER DATA:<input onChange={change}></input><br/>
        
       <h4> CHARACTERS: {data.length}</h4>
        </div>
        
    </>
  )
}

export default Test2



