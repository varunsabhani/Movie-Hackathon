import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">ABC</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/request">Request</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fund">Fund</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/buy">Buy</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" to="/mymovies">My Movies</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn btn-outline-success mx-2" type="button">Log In</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
