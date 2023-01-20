import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCookie, getClickUpgr, getCookies, getPerSec } from 'redux/gameAccSlice';
import { CookieButton, CookieContainer, CookieQuantity, PerSecond, CookieImage, CookieLight } from './Cookie.styled';
import { ClickEffect } from './ClickEffect/ClickEffect';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';

 const Cookie = () => {
    const dispatch = useDispatch();
    const cookie = useSelector(getCookies);
    const perSec = useSelector(getPerSec);
    const clickUpgrade = useSelector(getClickUpgr);
    const [shake, setShake] = useState(false);
    const [perClick, setPerClick] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [mouseCoordinates, setMouseCoordinates] = useState({});
    const [cookieEmotion, setCookieEmotion] = useState(false);
    const [emotion, setEmotion] = useState();
    
     
    useEffect(() => {
        const { baseValue } = clickUpgrade;
        setPerClick(baseValue);
    }, [clickUpgrade]);
    
     const handleClicker = (e) => { 
         clearTimeout(emotion);
         setCookieEmotion(true);
         setClicked(true);
         dispatch(addCookie(perClick));
         //Animation
         setEmotion(
             setTimeout(() => {
              setCookieEmotion(false);
          }, 1500)
         )
          setMouseCoordinates({ left: e.clientX, top: e.clientY });
          setTimeout(() => {
              setClicked(false);
          }, 1000);
          
        setShake(true);
        setTimeout(() => setShake(false), 10);
    };

    return (
        <>
            <CookieContainer>
                <CookieQuantity>{seriousNumbers(Math.round(cookie))} Cookies</CookieQuantity>
                <PerSecond> per second: {seriousNumbers(perSec)} </PerSecond>

                <CookieButton onMouseDown={handleClicker} className={shake ? `shake` : null}>
                <CookieLight>
                </CookieLight>
                <CookieImage src={cookieEmotion? 'images/Cookies/CookieHappy.png' : 'images/Cookies/CookieSad.png'} alt='cookie image' />
                </CookieButton>
            </CookieContainer>
                    {clicked && <ClickEffect obj={mouseCoordinates} value={perClick} />}
        </>
    )
}

export default memo(Cookie)
