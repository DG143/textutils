import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> */}
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} >
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      
        </div>

        {/* <div className={`form-check form-check-inline text-${props.mode === 'light'?'summer':'light'}`}>
              <input className="form-check-input" type="radio" onClick={props.summerMode} name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
               <label className="form-check-label" htmlFor="inlineRadio1">Spring mode</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className="form-check-label" htmlFor="inlineRadio2">Summer mode</label>
            </div> */}

      
      




      {/* </form> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title : 'Set Title here',
//     aboutText : 'about here'
// }