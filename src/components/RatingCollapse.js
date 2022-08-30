import React from 'react';

export default function RatingCollapse(params) {
  return(
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Rate
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
    </>
  )
};
