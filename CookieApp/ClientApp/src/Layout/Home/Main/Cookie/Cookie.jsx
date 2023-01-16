import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCookie, getClickUpgr, getCookies } from 'redux/gameAccSlice';
import { CookieButton, CookieContainer, CookieQuantity } from './Cookie.styled';

 const Cookie = () => {
    const dispatch = useDispatch();
    const cookie = useSelector(getCookies);
    const clickUpgrade = useSelector(getClickUpgr);
    const [shake, setShake] = useState(false);
    const [perClick, setPerClick] = useState(1);
    
    
    useEffect(() => {
        const { baseValue, level } = clickUpgrade;
        setPerClick(baseValue * (2 ** (level - 1)));
    }, [clickUpgrade]);
    

    const handleClicker = () => {
        dispatch(addCookie(perClick));
        //Animation
         setShake(true);
        setTimeout(() => setShake(false), 0);
    };

    return (
        <>
            <CookieContainer>
                <CookieQuantity>{Math.round(cookie)} Cookies</CookieQuantity>
                <CookieButton onClick={handleClicker} className = {shake ? `shake` : null}>Cookie</CookieButton>
            </CookieContainer>
        </>
    )
}

export default memo(Cookie)
