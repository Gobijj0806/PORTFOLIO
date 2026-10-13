import React from "react";
 import { useState } from "react";
 import'./Gobi.css';

 function Gobi (){

    const [value,setValue]= useState(0)
    const [input,setInput]=useState(" YOUR DATA ")
    const[email,setemail]=useState()
    const[age,setage]=useState()
    
      
    //  function add (){
    //    setValue(value+1);
        
    // }
    //  function sub (){
    //     setValue(value-1);
        
    // }
    function Toggle (){

         setValue(value== 0 ? 1 : 0)

    }
    function getData(event){

        // console.log(event.target.value)
        setInput(event.target.value)
    }

    function handleSubmit (event){
         event.preventDefault();
         alert(input)
         alert(email)
         alert(age)
    }
    function mail(event){
        setemail(event.target.value)
    }
    function ages(event){
        setage(event.target.value)
    }
   
    return(
        
        <div style={{backgroundColor: value ? "black" : "white" ,height:"100vh"}}>
        
        {/* {value}<br/> */}
        {/* <button onClick={add}>INCREMENT</button><br/>
        <button onClick={sub}>DESCREMENT</button><br/> */}
        <span style={{cursor:"pointer"}}onClick={Toggle} >{value ? "☀️" : "🌙"}</span>


         
         <form onSubmit={handleSubmit}>
           NAME <input onChange={getData}/><br/>
            EMAIL <input onChange={mail}/><br/>
            AGE <input onChange={ages}/><br/>
            <button type="submit">Submit</button>
         </form>
         
        </div>
    )
 }
 export default Gobi;

