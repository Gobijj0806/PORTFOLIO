import React from 'react'
import { useState } from 'react'
import'./Student.css'
function Student() {

    const [form,setFrom]=useState({

        name:" ",
        age:" ",
        course:" "

    })   

    const [value,setValue]=useState({

        name:"",
        age:"",
        course:""

    })   

    function change(event){

        setValue({

            ...value,
            [event.target.name]:event.target.value

        })
    }
    function submit(event){

        event.preventDefault();
        setFrom({

            ...form,
            name:value.name,
            age:value.age,
            course:value.course

        })
    }

    // COUNTER +,-

     const [count,setcount]=useState(0);
    
        function increment(){
    
            setcount(count+1);
    
        }
         function descrement(){
    
            setcount(count-1);
            
        }
        const [open,setopen]=useState(0);
        
        function Toggel(){
        
            setopen(open == 0 ? 1 : 0)
        
        }
        const [ opens,setopens]=useState(null)
        
            const acc=[
                {id:1,topic:"What is React?",para:"React (also known as React.js or ReactJS) is a popular, open-source JavaScript library used for building dynamic and interactive user interfaces (UIs). Developed by Meta (formerly Facebook) in 2013, it has become one of the most widely used technologies for modern front-end web development. "},
                
        
            ]
            function handleId(id){
                 
                setopens(opens == id ? null : id)
            }

  return (
    <>
    
    <div className='h'style={{backgroundColor: open ? "gray" : "white" ,height:"100vh"}}>
       
        <span onClick={Toggel}>{open ? "☀️" : "🌙"}</span><br/>
    

    {form.name}<br/>
    {form.age}<br/>
    {form.course}
    
    <form onSubmit={submit}>
        NAME:<input onChange={change} name={"name"} ></input><br/>
        AGE:<input onChange={change} name={"age"} ></input><br/>
        COURSE:<input onChange={change} name={"course"} ></input><br/>
        <button type='sumbit'>SUBMIT</button>
    </form>
    <div className='COUNT'>
        COUNTER<br/>
        {count}<br/>
        <button onClick={increment}> + </button>
        <button onClick={descrement}> - </button>
    </div>
    <div className='accordion'>
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

    </div>
    


    </>
  )
}

export default Student;
