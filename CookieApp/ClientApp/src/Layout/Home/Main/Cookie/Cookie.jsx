import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCookie, getClickUpgr, getCookies, getPerSec } from 'redux/gameAccSlice';
import { CookieButton, CookieContainer, CookieQuantity, PerSecond } from './Cookie.styled';
import { ClickEffect } from './ClickEffect/ClickEffect';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';
import image from 'images/Upgrades/Clicker.png';

 const Cookie = () => {
    const dispatch = useDispatch();
    const cookie = useSelector(getCookies);
    const perSec = useSelector(getPerSec);
    const clickUpgrade = useSelector(getClickUpgr);
    const [shake, setShake] = useState(false);
    const [perClick, setPerClick] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [mouseCoordinates, setMouseCoordinates] = useState({});

     
    useEffect(() => {
        const { baseValue } = clickUpgrade;
        setPerClick(baseValue);
    }, [clickUpgrade]);
    

     const handleClicker = (e) => { 
         setClicked(true);
         dispatch(addCookie(perClick));
         //Animation
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
                <CookieButton onMouseDown={handleClicker} className={shake ? `shake` : null}/>
                    {clicked && <ClickEffect obj={mouseCoordinates} value={perClick} />}
            </CookieContainer>
        </>
    )
}

export default memo(Cookie)
