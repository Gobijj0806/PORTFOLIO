import React from "react";

const ObjectExample = () =>{

    const student =[{
        id:1,
        name:"Gobi",
        age:21,
        department: "CSE",
        marks:90
    },

    {
        id:2,
        name:"bala",
        age:22,
        department: "CSE",
        marks:96
    }]
    // {const data= student.map((i)=>{ 
    //     return(
    //         <>
    //         {i.name}
    //         </>
    //     )
    // })
    // console.log(data)}
    
    // const numbers= [1,2,3,4,5,6];
    // const filtered=numbers.filter(
    //     function(x){
    //         return x>1
    //     }

    // )
    // console.log(filtered)

   const datamark = student.filter ((i)=>i.marks>95)
   console.log(datamark)


   // FUNCTION

   const number=[1,2,3,4,5,6,7]
   console.log("pop",number.pop(),number)
   console.log("push",number.push(8),number)
   console.log("shift",number.shift(),number)
   console.log("unshift",number.unshift(1),number)
   const result=number.slice(0, 6)
   console.log("result",result,number)
   const output=number.splice(1,3,"10" )
   console.log("output",output,number)





    return (
        <>
        {
            student.map((i) =>{
                return (
                    <>
                    <table>
                        <thead>
                           <tr>
                            <th>NAME </th>
                            <th>AGE </th>
                            <th>MARKS </th>
                           </tr>
                            
                        </thead>
                        <tbody>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.marks}</td>< br/>
                        
                           
                        </tbody>
                    </table>
                   
                    </>
                )

                
            })
        }
        </>

    )
        
    

}
export default ObjectExample;

