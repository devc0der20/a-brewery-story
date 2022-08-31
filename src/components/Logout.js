import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/accessSlice";

export default function Logout() {

  const dispatch = useDispatch()
  
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout())
  }
  
  return(
    <>
      <button onClick={handleLogout} className='btn btn-danger'>
        <i className="bi bi-box-arrow-left"> Logout </i>
      </button>
    </>
  )
};
