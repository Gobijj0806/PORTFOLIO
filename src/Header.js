import React from "react";
import{useState} from "react";

function Header()
{
    /*const ctime= new Date().toLocaleTimeString();
    const cdate= new Date().toLocaleDateString();
    console.log(ctime);
    console.log(cdate);
    if(ctime <= "08:00:00")
    {
        console.log("System is offline");
    }
    else
    {
        console.log("System is online");
    }
    return(
        <>
        HEADER TIME
        </>
    )*/
   const[status , setStatus]= useState("");
   const ctime= new Date().toLocaleTimeString();
   console.log(ctime);
   
   

}

export default Header;
