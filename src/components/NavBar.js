import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormDialog from './FormDialog';
import Logout from './Logout';
import { Link } from "react-router-dom";

export default function NavBar() {
  
  const dispatch = useDispatch()
  const onlineStatus = useSelector(state => state.access.loggedIn)
  const activeUserName = useSelector(state => state.access.activeUser.name)

  return(
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            
            {onlineStatus ? <Logout />: <FormDialog /> }
          </span>
          <span className="navbar-brand mb-0 h1">
            #
            {onlineStatus && activeUserName}</span>
        </div>
        <div>
          <Link to="imprint">Imprint</Link>
        </div>
      </nav>
    </>
  )
};
