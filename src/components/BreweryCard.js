import React from 'react';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import Favorite from './Favorite';
import RatingCollapse from './RatingCollapse';

 export default function BreweryCard({brewery}) {

   const loggedIn = useSelector(state => state.access.loggedIn)
  return(
    <>
      <div className="card my-3 w-75" >
        <img src="https://api.unsplash.com/photos/random" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{brewery.name}      
            {loggedIn  && <Rating />}
            </h5>
            <p className="card-text d-flex">
              <i className="bi bi-house-fill"></i>
              {brewery.street}</p>
            <p className="card-text">
              <i className="bi bi-telephone-fill"></i>
              {brewery.phone}
            </p>
            <a href={brewery.website_url} className="btn btn-outline-primary">visit it</a>
          </div>
          <div className="d-flex">
            <button className='btn btn-outline-success'>{loggedIn && <Favorite />}</button>
            {loggedIn && <RatingCollapse />}
          </div> 
      </div>
    </>
  )
  
 };
 