import React from 'react';

export default function RatingCollapse({brewery}) {
  return(
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#rating-collapse" aria-expanded="false" aria-controls="rating-collapse">
        Rate it
        <i className="bi bi-caret-down-fill"></i>
      </button>
      <div className="collapse" id="rating-collapse">
        <div className="card card-body border border-0">
        <textarea className='form-control' placeholder="write a short review.." type="plaintext" />
        </div>
      </div>
    </>
  )
};
