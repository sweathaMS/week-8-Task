import { useState } from "react"

function Task2()
{
    const[beforeval,setval]=useState("")
    const handleChange=(event)=>
    {
        setval(event.target.value)
    }
    return(
        <>
        <input placeholder="Enter Your Name" onChange={handleChange} style={{ marginTop: '10px' }} />
        <h2>{beforeval}</h2>
        </>
    )
}
export default Task2