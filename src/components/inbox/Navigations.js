import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.png";
import { userLogedOut } from '../../features/auth/authSlice';


const Navigations = () => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogedOut());
    localStorage.clear();
  }

    return (
      <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <img className="h-10" src={logoImage} alt="Learn with Sumit" />
            </Link>
            <ul>
              <li className="text-white" onClick={logout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navigations;