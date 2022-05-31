import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {

  return (

    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">TRY-CATCH</label>
        <ul>
          <li><Link to="/home" class="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contactus">Contact</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>

        </ul>
      </nav>

    </>
  )
}

export default Navbar