import React from 'react';
import '../App.scss';
import { Link } from "react-router-dom";

const Navbar = ({darkMode, onChangeMode}) => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar_left">
            <h1><Link to="/">Richard Chan</Link></h1>
        </div>
        <div className="navbar_right">
            <Link to="/now">Now</Link>
            <a href="mailto:richardchanme@gmail.com">Contact</a>
        </div>
    </nav>
)

export default Navbar;