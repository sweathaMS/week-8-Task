import { useState } from "react"

function Task1()
{
    const[value,setvalue]=useState(0)
    const handleChange=()=>
    {
        setvalue(value+1)
    }
    return(
        <>
        <br></br>
        <h2>{value}</h2>
        <button onClick={handleChange}>Click Me</button>

        </>
    )
}
export default Task1