import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { status } from "../features/accessSlice";
import Logout from "./Logout";

export default function Login() {
  
  const loggedIn = useSelector(state =>  state.access.loggedIn)
  const dispatch = useDispatch()
  const handleLogin = (event) => {
    // console.log("loggedIn " + loggedIn);
    event.preventDefault();
    const data = event.target
    dispatch(status())
  }

  return (
    // log-in form
    <>
      <form action="" onSubmit={handleLogin}> 
        <div className="mb-3">
          <label htmlFor="user" className="form-label">User</label>
          <input type="text" className="form-control" id="user"/>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label" id="password">Passowrd</label>
          <input type="text" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Log In!
        </button>
      </form>
      { loggedIn && <Logout />}
    </>
  )
};
