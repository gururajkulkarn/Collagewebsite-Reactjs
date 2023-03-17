import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Heading from './Heading'



const Nav = () => {
  return (
    <>
     <Heading/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark sticky-top">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">

      <li>
      <Link to="/">Home</Link>
      </li>
        <ul>
      <li>
          <Link to="#">About Us &#9662;</Link>
          <ul class="dropdown">
              <li><Link to="/aboutus">About Collage</Link></li>
              <li><Link to="/vision">Vision and Mission</Link></li>
              <li><Link to="">Founder</Link></li>
              <li><Link to="#">Chairman</Link></li>
              <li><Link to="#">Voice-Chairmanperson</Link></li>
              <li><Link to="#">Director Academics</Link></li>
              <li><Link to="#">Principal </Link></li>
              <li><Link to="#">Awards</Link></li>
              <li><Link to="#">Voice-Chairmanperson</Link></li>
              <li><Link to="#">Director Academics</Link></li>
          </ul>
      </li> 
  </ul>
  <ul>
      <li>
          <Link to="#">Facilities &#9662;</Link>
          <ul className="dropdown">
              <li><Link to="/">Library</Link></li>
              <li><Link to="#">Medical Facility</Link></li>
              <li><Link to="#">Hostel</Link></li>
              <li><Link to="#">Events</Link></li>
              <li><Link to="#">Sports and Games</Link></li>
          </ul>
      </li> 
  </ul>

  <li>
      <Link to="/placement">Placement</Link>
      </li>
      <li>
      <Link to="/research">Research</Link>
      </li>
      <li>
      <Link to="/motivation">Motivation</Link>
      </li>
      <li>
      <Link to="/staticpage">Staticpage</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      </ul>


    </div>
  </div>
</nav>

<Outlet/>

    </>
  )
}

export default Nav
