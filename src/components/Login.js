import React , {useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import ServerInterface from "../data/ServerInterface";
import { login, logout, fetchData } from "../features/accessSlice";

export default function Login() {
  // workaround
  const [online, setOnline] = useState(false);
  const dispatch = useDispatch();
  const [activeUser, setActiveUser] = useState(null);

  if(online) {
    dispatch(login(true, ))
  }
  const loggedIn = useSelector(state =>  state.access.loggedIn)

  const handleStatus = (event) => {
    event.preventDefault();
    // user data from login form
    const {user , password } = event.target
    console.log(user.value, password.value);
    fetch(`http://localhost:8080/db?user=${user.value}&password=${password.value}`)
      .then(response => response.json())
      .then(data => {
        console.log("result", data.result);
        setOnline(data.result)
        console.log("online", online);
      })
  }
 

  return (

    // log-in form
    <div className="col">
      <form onSubmit={handleStatus}> 
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
