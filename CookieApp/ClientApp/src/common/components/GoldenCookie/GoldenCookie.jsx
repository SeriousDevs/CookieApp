import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clickGoldenCookie } from "redux/gameAccSlice";
import { GoldenBtn, GoldenImg } from "./GoldenCOokie.styled"

export const GoldenCookie = ({ counter }) => {
    const [showMe, setShowMe] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const dispatch = useDispatch();
    const { innerWidth: width, innerHeight: height } = window;

    useEffect(() => {
        if (counter === 0 || counter % 2) return;
        setShowMe(true);
        setCoordinates({
            top: `${Math.floor(Math.random() * (height-80))+80}px`,
            left: `${Math.floor(Math.random() * (width-80))+80}px`,
        })
        setTimeout(() => {
            setShowMe(false);
        dispatch(clickGoldenCookie(false));
        }, 30000);
    }, [counter]);

    const handleClick = () => {
        setShowMe(false);
        dispatch(clickGoldenCookie(true));
    }
    
    return (<>{
        showMe && <GoldenBtn top={coordinates.top} left={coordinates.left} onClick={handleClick}>
            <GoldenImg src="images/Cookies/GoldenCookie.png" alt="" />
        </GoldenBtn >}</>
    )
}
