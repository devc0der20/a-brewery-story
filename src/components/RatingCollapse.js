import React from 'react';
import Review from './Review';

export default function RatingCollapse({brewery}) {
  const target_id = `#${brewery.id}`
  return(
    <>
      <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target={target_id}  aria-expanded="false" aria-controls= {brewery.id} >
        Rate and Review
        <i className="bi bi-caret-down-fill"></i>
      </button>
      
      <div className='center'>
        <Review brewery={brewery}/>
      </div>
       
    </>
  )
};
