
import { useState } from 'react';
function Task2() {
 
    const[tog,settog]=useState(true)
  
     function click() 
     {
        settog(!tog)
       
     }
  return (
    <>
  {
    tog?<h1>Hello</h1>:null
  }
     <button onClick={click}>Click Me</button>
     <br/>
     </>
     
    );
  }
  
  export default Task2