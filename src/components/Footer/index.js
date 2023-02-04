import React from 'react'
import Logo from '../assests/images/logo.svg';
import discordIcon from "../assests/images/discordIcon.svg";
import telegramIcon from "../assests/images/telegramIcon.svg";
import twitterIcon from "../assests/images/twitterIcon.svg";
import "./style.css"

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
            <div className='social-icons-div'>
              <img src={telegramIcon} className="social-icons" alt="telegram-icon"/>
              <img src={twitterIcon} className="social-icons" alt="twitter-icon"/>
              <img src={discordIcon} className="social-icons" alt="discord-icon"/>
            </div>
          </div>
        </div>
        </footer>
    );
}