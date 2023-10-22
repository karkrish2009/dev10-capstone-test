import React from "react";
import { NavLink } from "react-router-dom";


const navStyle = {
    width: "100%",
  };

export default function Nav({ isAuthenticated }) {
    return (
        <div className="container-fluid" style={navStyle}>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
                <NavLink className="navbar-brand vt323-font" to="/">
                    Home Energy Monitor
                </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {isAuthenticated ? (
                        <>
                           <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/floorplan">
                                    Floorplan
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/selection">
                                    Select House
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/displayResults">
                                    Results
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/logout">
                                    Log out
                                </NavLink>
                            </li>
                        </>) : (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/signup">
                                    Sign Up
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link vt323-font" to="/signin">
                                    Log In
                                </NavLink>
                            </li>
                        </>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}