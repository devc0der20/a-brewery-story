import React , {useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { login, logout, fetchData, checkCreds } from "../features/accessSlice";


export default function Login() {
  
  const loggedIn = useSelector(state =>  state.access.loggedIn)
  const dispatch = useDispatch()
  const handleLogin = (event) => {
    event.preventDefault();
    // user data from login form
    console.log(event.target);
    const userData = {
      user: event.target[0].value,
      password: event.target[1].value
    }
    // userData as payload
    dispatch(login(userData))
  }

  return (

    // log-in form
    <div className="col">
      <form onSubmit={handleLogin}> 
        <div className="input-group mb-3">
          <span className="input-group-text" id="user-wrapper"><i className="bi bi-person-fill"></i></span>
          <input type="text" name="user" className="form-control" id="user" aria-describedby="user-wrapper" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="password-warppaer"><i className="bi bi-key"></i></span>
          <input type="password" name="password" className="form-control" id="password" aria-describedby="password-wrapper" />
        </div>
        <button>submit</button>
      </form>

    </div>
  )
};
