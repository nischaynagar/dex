import React from 'react'
import Logo from '../assests/images/logo.svg';
import "./style.css";

export default function Navbar(props) {
  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id='nav-wrapper' >
            <div className="logo cursor-pointer" >
              <img src={Logo} alt =""/>
              <p>CroKing</p>
            </div>
            <button  className="button display-sm-hidden display-md-inline-flex">Connect Wallet</button>
          </div>
        </div>
      </header>
    </>
  )
}
