import React from 'react'
import { Route,Routes,Link } from 'react-router'
import Login_Take from './Login_Take'
import Contact_Take from './Contact_Take'
import Skills_Take from './Skills_Take'
import Project_Take from './Project_Take'
import Accordion_Take from './Accordion_Take'
import About_Take from './About_Take'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Home_Take = () => {
  const [data,setdata]=useState([])

  useEffect(()=>{
        axios.get("https://dummyjson.com/c/f9ff-e0a9-48d3-acb1")
        // .then((res)=> console.log(res.data))
        .then((res)=>{setdata(res.data)})
    },[])

console.log(data)
  const data1 =[{

    id:"073",
    name:"GOBI J",
    username:"GOBI 143",
    contact:"9363602776 ",
    email:"gobigt650@gmail.com",
    role:"STUDENT",
    skill:["JAVA","PYTHON","MERN"],
    project:[{
       tilte:"STUDENT MANAGEMENT ",
       description:"COLLECTION OF DATA "

    },
  {
       tilte:"TASK MANAGEMENT ",
       description:"MANAGE THE TASK "

    }],
    location:"NAMAKKAL",
    About:" ",
    social:{
      
    },
    accordion:[{}]


  }]

  return (
    <>
    <Link to="/Login_Take">LOGIN</Link>&nbsp;
    <Link to="/Project_Take">PROJECT</Link>&nbsp;
    <Link to="/Contact_Take">CONTACT</Link>&nbsp;
    <Link to="/Skills_Take">SKILLS</Link>&nbsp;
    <Link to="/Accordion_Take">ACCORDION</Link>&nbsp;
    <Link to="/About_Take">ABOUT</Link>&nbsp;
    
    <Routes>
      <Route path='/Login_Take' element={<Login_Take/>}/>
      <Route path='/Project_Take' element={<Project_Take/>}/>
      <Route path='/Contact_Take' element={<Contact_Take/>}/>
      <Route path='/Accordion_Take' element={<Accordion_Take/>}/>
      <Route path='/Skills_Take' element={<Skills_Take/>}/>
      <Route path='/About_Take' element={<About_Take/>}/>
     </Routes>
      
    </>
  )
}

export default Home_Take

