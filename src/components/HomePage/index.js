import React from 'react'
import refreshLogo from '../assests/images/refresh.svg';
import lionImage from "../assests/images/lion.svg";
import InfoLogo from "../assests/images/info.svg";
import arrowWStroke from '../assests/images/arrowwstroke.svg';
import arrowDown from '../assests/images/arrowDown.svg';
import "./style.css";

export default function HomePage()
{
    return (
        <>
            <div className='content-wrapper'>
                <div className='card'>
                    <div className='swap-form-header'>
                            <div className='swap-menu-item'>Swap</div>
                            <img src={refreshLogo} className='cursor-pointer' alt="refresh" />
                    </div>
                    <div className='token-input'>
                        <div className='token-input-row'>
                            You sell
                        </div>
                        <div className='token-input-row'>
                            <div className='select-coin cursor-pointer'>
                                <div>
                                    DAI
                                </div>
                             <img src={arrowWStroke} alt="arrow"/>
                            </div>
                            <input className='input' type="text" value="1"/>
                        </div>
                        <div className='token-input-row'>
                             <div>
                                 Dai Stablecoin
                             </div>
                             <div>
                                 aprox $1.1213
                             </div>
                        </div>
                    </div>
                    <div className='token-input'>
                        <div className='token-input-row'>
                            You Buy
                        </div>
                        <div className='token-input-row'>
                            <div>
                                ETH
                            </div>
                        </div>
                        <div className='token-input-row'>
                            Ethereum
                        </div>
                    </div>
                    <div className='token-input'>
                        <div className='token-input-row'>
                            <image src={InfoLogo} />
                            <p>1ETH =  1 581.4(DAI)</p>
                        </div>
                    </div>
                </div>
                <div>
                    Image
                    <image src={lionImage} alt="lionImage"/>
                </div>
            </div>
        </>
    )
}