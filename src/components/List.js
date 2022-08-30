import React from 'react';
import Login from './Login';
import Rating from './Rating';

export default function List({results}) {
  
  return (
    <table className="table-light">
      "Results"
      {/* {Login && <Login />} */}
      { results && Object.entries(results).map(([key, result]) => {
        console.log(result);
        return <tr className="table-light" key={result.id+"_"+key}>{result.name} 
          <span>{result.street}</span>
        </tr >
      })
        
      }
      <Rating />
    </table>
  )
};
