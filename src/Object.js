import React, { use } from 'react'
import { useState } from 'react'

function Object()
{

  const [form,setform]=useState({

       
        name:" ",
        age:"",
        email:""

  });
  const [value,setValue]=useState({
        
        name:"",
        age:"",
        email:""
    });
 
 function change(event){
  setValue({
    ...value,
    // name:event.target.value,
    [event.target.name]:event.target.value  // multi value metnod
    
 })
 }

 function submit(event){
  event.preventDefault();
  setform(
    {
      ...form,
      name:value.name,
      age:value.age,
      email:value.email
    }
  )}

  // function age(event){
  //   setValue(
  //   {
  //     ...value,
  //   age:event.target.value,
  //   }

  // )}


//  const {id,name,age,...remains}=arr // rest operater
//  console.log(remains)

//  const update ={
//     ...arr,
//     age:"20"
    
//  }
//  console.log(update)
  return (
    <>
    
    {form.name}<br/>
    {form.email}<br/>
    {form.age}
    
    
    
    <form onSubmit={submit}>
      <label> NAME </label> <br/> <input onChange={change} name={"name"}/><br/>
      <label>  EMAIL </label> <br/> <input onChange={change}name={"email"}/><br/>
      <label> AGE </label> <br/> <input onChange={change}name={"age"}/><br/>
      <button type='submit'> SUBMIT </button>


    </form>
    
    </>
  )

}

export default Object;
