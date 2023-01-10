import { useState } from 'react';
import { CookieButton, CookieContainer, CookieQuantity } from './Cookie.styled';

export const Cookie = () => {
    const [cookies, setCookies] = useState(0);
     const [shake, setShake] = useState(false);
    // const [perClick, setPerClick] = useState(1);

    const handleClicker = () => {
        setCookies(p => p + 1);
         setShake(true);
        setTimeout(() => setShake(false), 50);
    };

    return (
        <>
            <CookieContainer>
                <CookieQuantity>{cookies} Cookies</CookieQuantity>
                <CookieButton onClick={handleClicker} className = {shake ? `shake` : null}>Cookie</CookieButton>
            </CookieContainer>
        </>
    )
}
