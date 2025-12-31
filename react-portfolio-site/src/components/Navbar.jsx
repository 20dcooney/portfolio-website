import React from 'react';
import Link from 'react-router-dom'
import '../css/Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar" role="navigation">

    <div className="navbar-right">
        <a><img src="/dc-logo.png"></img></a>
    </div>
    <div className="navbar-left">
        <ul className="nav-links">

            <Link to="/">Home</Link>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
</nav>
);
};

export default Navbar;