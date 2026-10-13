import React from 'react'
import { Route,Routes,Link } from 'react-router'
import Login_Portfolio from './Login_Portfolio'
import Project_Portfolio from './Project_Portfolio'
import Contact_Portfolio from './Contact_Portfolio'
import About_Portfolio from './About_Portfolio'

const Home_Portfolio = () => {
  return (
    <div>
        <div className='link'>  

    
    <Link to="/Login_Portfolio">LOGIN</Link>&nbsp;
    <Link to="/Project_Portfolio">PROJECT</Link>&nbsp;
    <Link to="/Contact_Portfolio">CONTACT</Link>&nbsp;
    <Link to="/About_Portfolio">ABOUT</Link>&nbsp;
    
    <Routes>
      <Route path='/Home_Portfolio' element={<Home_Portfolio/>}/>
      <Route path='/Login_Portfolio' element={<Login_Portfolio/>}/>
      <Route path='/Project_Portfolio' element={<Project_Portfolio/>}/>
      <Route path='/Contact_Portfolio' element={<Contact_Portfolio/>}/>
      <Route path='/About_Portfolio' element={<About_Portfolio/>}/>
     </Routes>
     </div> 

    </div>
  )
}

export default Home_Portfolio