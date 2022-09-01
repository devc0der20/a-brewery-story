import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormDialog from './FormDialog';
import Logout from './Logout';
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  
  const dispatch = useDispatch()
  const onlineStatus = useSelector(state => state.access.loggedIn)
  const activeUserName = useSelector(state => state.access.activeUser.name)

  return(
    <>
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <NavLink to="/">home</NavLink>
          </span>
          <span>
            <Link to="imprint">Imprint</Link>
          </span>
          <span>
              <Link to="chart">Charts</Link>
          </span>
          <div>
            {onlineStatus ? <Logout />: <FormDialog /> }
            {onlineStatus && (
              <span className="navbar-brand mb-0 h1">
                <i class="bi bi-person-fill h2 text-success"></i>
                {activeUserName}
              </span>
            )}
          </div>
        </div>
        <div>
        </div>
      </nav>
    </>
  )
};
