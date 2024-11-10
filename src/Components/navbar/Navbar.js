
import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4   ">
<div className="container-fluid">
    <Link className="navbar-brand px-4" to="#">
        <img src="../icon.png" alt="icon" width="40" height="34"/>
    </Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5 fs-6">
            <li className="nav-item">
                <Link className="nav-link active" to="/"><span
                        className="bi bi-house-door-fill"></span> Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/About"><span className="bi bi-file-person-fill"></span>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/Resume"><span className="bi bi-ticket-detailed-fill"></span>Resume</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/Experience"><span className="bi bi-briefcase-fill"></span>Experience</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/Contact"><span className="bi bi-envelope"></span>Contact us</Link>
            </li>
            </ul>
    </div>
</div>
</nav>

   
   </>
  );
}

export default Navbar;