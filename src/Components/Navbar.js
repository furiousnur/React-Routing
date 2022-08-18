import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav> 
            <NavLink to="/" className="nav-link">Home</NavLink><br/>
            <NavLink to="/blogs" className="nav-link">Blogs</NavLink><br/>
            <NavLink to="/about" className="nav-link">About</NavLink><br/>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/users" className="nav-link">Users</NavLink>
        </nav>
    );
};

export default Navbar;
