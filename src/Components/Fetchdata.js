

import { useEffect, useState } from "react";

function FetchDataAPI()
{
    const [userdet, setuserdet] = useState([]);    

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((userdet) => {
        setuserdet(userdet);   
      })
      
  }, []);  

  return(
        <>
        <h1>Fetching  Data from an API</h1>
        <ul>
           UserID: {userdet.userId}
            <p>
                ID: {userdet.id}
            </p>
            <p>
                Title: {userdet.title}
            </p>  
            <p>
                Completed: {userdet.completed?'True':'False'}
            </p>  
        </ul>
        </>
    )
}

export default FetchDataAPI
