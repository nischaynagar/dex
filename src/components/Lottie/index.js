import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import lighteningLottie from '../assests/images/lighteningLottie.json';
import './style.css';

export  function Lottie1() {
    const lot = useRef()
  useEffect(()=>{
    const instance = lottie.loadAnimation({
        container: lot.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: require(lighteningLottie),
    });
    return () => instance.destroy();
  }, [])
  return (
    <div ref={lot} className="lighteningLottie"></div>
  )
}
