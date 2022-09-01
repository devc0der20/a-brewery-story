import { Rating } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../features/accessSlice";
import BasicRating
 from './BasicRating';

export default function Review({brewery}) {

    const activeUserName = useSelector(state => state.access.activeUser.name)
    const dispatch = useDispatch()
    // const activeUser ="user"
    const handleRatings = (event) => {
      event.preventDefault();
      console.log(event.target);
      const reviewData = {
        rating:  [Number(event.target.selected_rate.value)],
        review:  [event.target.review_text.value],
        id: brewery.id
      }
      dispatch(addReview(reviewData))
    }

  return(
    <>
      <div className="collapse" id={brewery.id} >
        <div className="card card-body ">
          <form action="" onSubmit={handleRatings}>
            <BasicRating brewery={brewery}/>
            <textarea id="review_text" className='form-control' placeholder="write a short review.." type="plaintext" />
            <button className='btn btn-outline-primary' type="submit">Rate</button>
          </form>
        </div>
      </div>
    </>
  )
};
