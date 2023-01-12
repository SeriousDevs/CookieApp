import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCookie, getClickPerCookie, getCookies } from 'redux/gameAccSlice';
import { CookieButton, CookieContainer, CookieQuantity } from './Cookie.styled';

export const Cookie = () => {
    const dispatch = useDispatch();
    const cookie = useSelector(getCookies);
    const clickUpgrade = useSelector(getClickPerCookie);
    const [shake, setShake] = useState(false);
    const [perClick, setPerClick] = useState(1);

    useEffect(() => {
        const { baseTick, amount } = clickUpgrade;
        setPerClick(baseTick * amount);
    }, [clickUpgrade])
    

    const handleClicker = () => {
        dispatch(addCookie(perClick));
        //Animation
         setShake(true);
        setTimeout(() => setShake(false), 50);
    };

    return (
        <>
            <CookieContainer>
                <CookieQuantity>{cookie} Cookies</CookieQuantity>
                <CookieButton onClick={handleClicker} className = {shake ? `shake` : null}>Cookie</CookieButton>
            </CookieContainer>
        </>
    )
}
