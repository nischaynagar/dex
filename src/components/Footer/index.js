import React from 'react'
import Logo from '../assests/images/logo.svg';

export default function Footer()
{
    return (
        <footer>
           <div className="container mobile-width">
          <div className="footer-wrapper" id='foot-wrapper' >
            <div className="logo cursor-pointer" >
              <img src={Logo} alt =""/>
              <p>CroKing</p>
            </div>
          </div>
        </div>
        </footer>
    );
}