import React, { useState } from "react";
import'./Accordion.css';

 const Accordion = () =>{

      //const[open,setopen]=useState(false)
      const[open,setopen]=useState(null)

      // function expand(){
      //   setopen(!open)
      // }
      const accor =[
        {id:1,tilte:"ACCORDION 1",para:"GOBI JJ"},
        {id:2,tilte:"ACCORDION 2",para:"GOBI 143"},
      ]
      function handleId(id){
        console.log(id)
        // setopen(id)
        setopen(open == id ? null : id)
      }


      return(
        <>
            {/* <p className='head'onClick={expand}>Accordion 1</p>
            {open ? <p>  I AM GOBI JJ </p>:""}
             */}
             {
                accor.map((res) =>{
                    return(
                        <> 
                            {/* <p className="head" onClick={()=> setopen(!open)}> {res.tilte}</p>
                            {open ? <p>{res.para}</p> :""} */}
                            <p className="head" onClick={()=>handleId(res.id)}> {res.tilte}</p>
                            {open == res.id ? <p>{res.para}</p> :""}


                        </>
                    )
                })
             }



        </>
      )
 }
 export default Accordion;
