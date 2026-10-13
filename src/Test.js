import React from "react";
import { useState } from "react";

function Test(){

    const [open,setopen]=useState(0);

    function Toggel(){

        setopen(open == 0 ? 1 : 0)

    }
    const [count,setcount]=useState(0);

    function increment(){

        setcount(count+1);

    }
     function descrement(){

        setcount(count-1);
        
    }
    const [ opens,setopens]=useState(null)

    const acc=[
        {id:1,topic:"PARAGRAPH1",para:"GOBI JJ"},
        {id:2,topic:"PARAGRAPH2",para:"GOBI "}

    ]
    function handleId(id){
         
        setopens(opens == id ? null : id)
    }



    const [form,setform]=useState({

        name:" ",
        age:"",
        course:""

    })
    const [value,setValue]=useState({

        name:" ",
        age:"",
        course:""

    })
    function submit(event){
        event.preventDefault();
        setform(

        )

    }
    return(
        <>

        <div style={{background:open ? "black" : "white" ,height:"100vh"}}>
            
        <span onClick={Toggel}>{open ? "☀️" : "🌙"}</span><br/>
        {count}<br/>
        <button onClick={increment}> add </button>
        <button onClick={descrement}> sub </button>
         {
            acc.map((res) =>{
                return(
                    <>
                     <p className="head" onClick={()=>handleId(res.id)}> {res.topic}</p>
                            {opens == res.id ? <p>{res.para}</p> :""}

                    </>
                )

            })
         }
        </div>
        
        {/* <form onChange={submit}>
            NAME <input onChange={change} name={name}></input>
        </form> */}
        </>
    )

}
export default Test;
