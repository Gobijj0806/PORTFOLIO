import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Login_Take = () => {
  const [data,setdata]=useState([])

  useEffect(()=>{
        axios.get("https://dummyjson.com/c/f9ff-e0a9-48d3-acb1")
        // .then((res)=> console.log(res.data))
        .then((res)=>{setdata(res.data)})
    },[])
  return (
   <>
   <div>
    {/* <form>
        <input type='text' placeholder='EMAIL'></input>
        <input type='password' placeholder='PASSWORD'></input>
    </form> */}
    {data.map((res) =>{
      return(
        <>
            <form>
        <input type='text' placeholder='EMAIL'></input>
        <input type='password' placeholder='PASSWORD'></input>
    </form>
        {res.email}
        </>
      )

    })
}
   </div>
   </>
  )
}

export default Login_Take
