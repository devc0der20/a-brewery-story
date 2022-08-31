import React from 'react';
import BreweryCard from './BreweryCard';
import Login from './Login';
import Rating from './BasicRating';
import BreweryCardMui from './mui/Card';

export default function List({results}) {
  
  return (
    <>
        "Results"
        {/* {Login && <Login />} */}
        { results && Object.entries(results).map(([key, result]) => {
          // console.log(result);
          return (
            <BreweryCard key={key} brewery={result} />
            )
          })
          
        }
    </>
  )
};
