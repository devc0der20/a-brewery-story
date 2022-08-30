import React from 'react';
import Login from './Login';

export default function List({results}) {
  
  return (
    <ul>
      "Results"
      {/* {Login && <Login />} */}
      { results && Object.entries(results).map(([key, result]) => {
        console.log(result);
        return <li key={result.id+"_"+key}>{result.name} 
          <span>{result.street}</span>
        </li>
      })
        
      }
    </ul>
  )
};
