import { useState } from "react";

function Task5() 
{
    
    const [list,setlist]=useState(["Apple","Orange","Mango"])
    const[inputvalue,setinputvalue]=useState("")
   const  ipvalue=(event)=>
   {
       setinputvalue(event.target.value)
   }

    const handlechange=(event)=>
    {
        event.preventDefault();
       setlist([...list,inputvalue])     
       setinputvalue("")

    }

    return(
        <>
        <input placeholder='Enter Your List' value={inputvalue} onChange={ipvalue} ></input>
        <button onClick={handlechange}>ADD</button>
        <ul>
           {list.map(function(items)
           {
            return(
                <li>{items}</li>
            )
           })}
        </ul>
      </>
    );
  }
export default Task5