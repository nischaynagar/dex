import React, { useState } from "react";
import refreshLogo from '../assests/images/refresh.svg';
import lionImage from "../assests/images/lion.svg";
import InfoLogo from "../assests/images/info.svg";
import arrowWStroke from '../assests/images/arrowwstroke.svg';
import swapIcon from "../assests/images/swapIcon.svg";
import walletIcon from "../assests/images/walletIcon.svg"
import daiIcon from "../assests/images/daiIcon.svg";
import ethIcon from "../assests/images/ethIcon.svg";
import legacyIcon from '../assests/images/legacyIcon.svg'
import walkingman from "../assests/images/walkingman.svg"
import searchIcon from "../assests/images/searchIcon.svg"
import pin from "../assests/images/pin.svg"
import highlightedpin from "../assests/images/highlightedPin.svg"
import "./style.css";
import { Lottie1 } from '../Lottie';

export default function HomePage()
{

    const [expanded, setExpanded] = useState(false);
    const [selectToken, setSelectToken] = useState(false);

    // Refresh btn
    const [isRotating, setIsRotating] = useState(false);
    const handleRefreshClick = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 500); // rotate for 5 milliseconds
      };

    return (
        <>
            <div className='content-wrapper'>
                {!selectToken ? (
            <div className='card1'style={{
                    alignSelf: expanded? "flex-start" : "center"
                }} >
                    <div className='swap-form-header'>
                            <div className='swap-menu-item'>Swap</div>
                            <div className='refresh-icon-div'>
                                <img onClick={handleRefreshClick} src={refreshLogo} className={`cursor-pointer refreshIcon ${isRotating ? "rotating" : ""}`} alt="refresh" />
                            </div>
                    </div>
                    <div className="token-input-wrapper">
                    <div className='token-input'>
                        <div className='token-input-row buy-sell-text'>
                            You sell
                        </div>
                        <div className='token-input-row'>
                            <div onClick={()=>setSelectToken(true)} className='select-coin cursor-pointer'>
                                <div className='coin-desc'>
                                    <img src={daiIcon} alt ="dai-icon"/>
                                    DAI
                                </div>
                             <img src={arrowWStroke} className="arrowIcon" alt="arrow"/>
                            </div>
                            <input className='input' type="text" value="1"/>
                        </div>
                        <div className='token-input-row'>
                             <div className='coin-name'>
                                 Dai Stablecoin
                             </div>
                             <div className="coin-val">
                                 approx $1.1213
                             </div>
                        </div>
                    </div>
                    <div className='swapIconDiv'>
                        <img src={swapIcon} className="swapIcon"  alt="swap-icon"/>
                    </div>
                    <div className='token-input2'>
                        <div className='token-input-row buy-sell-text'>
                            You Buy
                        </div>
                        <div className='token-input-row'>
                            <div onClick={()=>setSelectToken(true)} className='select-coin cursor-pointer'>
                                <div className='coin-desc'>
                                    <img src={ethIcon} alt ="dai-icon" />
                                    ETH
                                </div>
                             <img src={arrowWStroke} className="arrowIcon" alt="arrow"/>
                            </div>
                            <input className='input' type="text" value="1"/>
                        </div>
                        <div className='token-input-row'>
                             <div className='coin-name'>
                                 Ethereum
                             </div>
                             <div className="coin-val">
                                 approx $1.1213
                             </div>
                        </div>
                    </div>
                    </div>
                    <div className='token-input'>
                        <div className='swap-mode-selector'>
                            <div className='swap-mode-selector-content'
                                style={{
                                    display: expanded ? "none" : "flex",
                                    overflow: "hidden",
                                    }}>
                                <img src={InfoLogo} alt="info-logo"/>
                                <p>1ETH&nbsp;=&nbsp;1581.4(DAI)</p>
                                <span className='swap-mode-span'>$1.5585</span>
                            </div>
                            <div 
                                style={{
                                    display: expanded ? "flex" : "none",
                                    width: "100%"
                                    }}>
                                        Swap mode</div>
                            <div className='accord' 
                                style={{
                                    width: expanded ? "100%" : "auto",
                                    }}
                                    >
                                <div style={{
                                    display: expanded ? "none" : "flex",
                                    overflow: "hidden",
                                    }}>
                                    <Lottie1 Class="lighteningLottiec1" />
                                    $3.07
                                </div>
                            <div onClick={() => setExpanded(!expanded)}
                                 className="swap-mode-arrowicon">
                             <img 
                                 
                                src={arrowWStroke} 
                                style={{transform: expanded ? "scale(-1)" : "scale(1)" }} 
                                alt="arrow"
                             />
                             </div>
                            </div>
                        </div>
                            <div
                                style={{
                                height: expanded ? "auto" : 0,
                                overflow: "hidden",
                                transition: "height 0.5s ease-out"
                                }}
                            >
                                <div className="modes">
                                    <div className="mode-option-notselected">
                                        <Lottie1 Class="lighteningLottiec2" />
                                        <span>Lightning&nbsp;=&nbsp;Fast</span>
                                        <span>Tx&nbsp;Cost&nbsp;$0</span>
                                    </div>
                                    <div className="mode-option-selected">
                                        <img src={legacyIcon} className='leagacy-icon' alt="legacyIcon" />
                                        <span>Legacy&nbsp;=&nbsp;<b className="bold">Normal</b></span>
                                        <span>Tx&nbsp;Cost&nbsp;$3.98</span>
                                    </div>
                                </div>
                                <div class="grid-container">
                                    <div className="grid-row">
                                    <div>
                                        1&nbsp;ETH&nbsp;price
                                    </div>
                                    <div className="value-desc">
                                        <span className="usd-token-price">($1588.5)</span>
                                        <span className="highlighted-token-amount">1581.4&nbsp;(DAI)</span>
                                    </div>
                                    </div>
                                    <div className="grid-row">
                                    <div>
                                        1&nbsp;DAI&nbsp;price
                                    </div>
                                    <div className="value-desc">
                                        <span className="usd-token-price">($1588.598)</span>
                                        <span className="highlighted-token-amount">1581.4&nbsp;(ETH)</span>
                                    </div>
                                    </div>
                                    <div className="grid-row">
                                    <div>
                                        Tx&nbsp;Cost
                                    </div>
                                    <div className="value-desc">
                                        <button className="hidebtn">Hide</button>
                                        <img src={walkingman} className='cursor-pointer refreshIcon' alt="refresh" />
                                        <span className="usd-token-price">($1588.5)</span>
                                        <span className="highlighted-token-amount">1581.4&nbsp;(DAI)</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="btn-wrapper">
                        <button className='connect-wallet-btn'>
                            <img src={walletIcon} alt="wallet-icon" />
                            Connect Wallet
                        </button>
                    </div>
                </div> 
            ) :  ( 
                <div className="card2">
                    <div className="select-token-header">
                        <div className="backIcon-div" onClick={()=>setSelectToken(false)}  >
                        <img src={arrowWStroke} className="arrowIconback" alt="arrow"/>
                        </div>
                        <div className="headingtxt">Select a token</div>
                    </div>
                    <div className="searchBar">
                        <img src={searchIcon} className="searchIcon" alt="search-icon"/>
                        <input className="search-input" type="text" placeholder="Search by name or paste address" />
                    </div>
                    <div className="token-grid">
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                        <div className="fav-tokens">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div>ETH</div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="select-accordion">
                        <div className="token-choice">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div className="">
                            <div className="token-name">
                                 Ethereum
                            </div>
                            <div className="token-symbol">ETH</div>
                            </div>
                            <div className="pinned">
                                <div>0</div>
                                <img src={pin} className="pin-align" alt="pin" />
                            </div>
                        </div>
                        <div className="token-choice">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div className="">
                            <div className="token-name">
                                 Ethereum
                            </div>
                            <div className="token-symbol">ETH</div>
                            </div>
                            <div className="pinned">
                                <div>0</div>
                                <img src={highlightedpin} className="pin-align" alt="pin" />
                            </div>
                        </div>
                        <div className="token-choice">
                            <img src={ethIcon} alt ="eth-icon" />
                            <div className="">
                            <div className="token-name">
                                 Ethereum
                            </div>
                            <div className="token-symbol">ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                <div className="img-wrapper">
                    <img className='lionImage' src={lionImage} alt="lionImage"/>
                </div>
            </div>
        </>
    )
}