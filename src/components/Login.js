import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { login, logout, fetchData } from "../features/accessSlice";
import Logout from "./Logout";
import { database } from "../data/ServerInterface";


export default function Login() {
  
  const loggedIn = useSelector(state =>  state.access.loggedIn)
  const dispatch = useDispatch()
  const handleLogin = (event) => {
    
    event.preventDefault();
    // user data from login form
    const userData = {
      user: event.target[0].value,
      password: event.target[1].value
    }

    // console.log(database);
    // userData as payload
    // fetch("http://localhost:8080/db")
    //   .then(response => response.json())
    //   .then(data => dispatch(login(data)))
    //   .catch(error => console.error(error))
    // dispatch(fetchData())
    // dispatch(login(userData))
  }

  return (
    // log-in form
    <div className="col">
      <form action="" onSubmit={handleLogin} > 
        <div className="input-group mb-3">
          <span className="input-group-text" id="user-wrapper"><i className="bi bi-person-fill"></i></span>
          <input type="text" className="form-control" id="user" aria-describedby="user-wrapper" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="password-warppaer"><i className="bi bi-key"></i></span>
          <input type="password" className="form-control" id="password" aria-describedby="password-wrapper" />
        </div>
        <button type="submit" className="btn btn-outline-success">
          LOG IN
          <i className="bi bi-box-arrow-right"></i>
        </button>
        { loggedIn && <Logout />}
      </form>
    </div>
  )
};
