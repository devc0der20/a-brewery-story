import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/accessSlice";

export default function Favorite({brewery}) {
  const dispatch = useDispatch()
  const userFavorites = useSelector(state => state.access.favorites)
  // console.log(userFavorites);

  return(
    <>
      <button className='btn btn-outline-success'>
        <i className="bi bi-heart" onClick={ () => dispatch(addFavorite(brewery.id))}>

        </i>
      </button>
    </>
  )
};
