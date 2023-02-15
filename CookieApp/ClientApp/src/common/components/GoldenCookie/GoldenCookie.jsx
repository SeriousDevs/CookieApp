import { useEffect, useState } from "react";
import { GoldenBtn, GoldenImg } from "./GoldenCOokie.styled"

export const GoldenCookie = ({counter}) => {
    const [showMe, setShowMe] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const { innerWidth: width, innerHeight: height } = window;

    useEffect(() => {
        if (counter === 0 || counter % 2) return;
        setShowMe(true);
        setCoordinates({
    top:`${ Math.floor(Math.random() * height)}px`,
    left:`${ Math.floor(Math.random() * width)}px`,
})
        setTimeout(() => {
      setShowMe(false);
    }, 10000);
    }, [counter]);

    const handleClick = () => {
        setShowMe(false);
    }
    
  return (<>{
      showMe && <GoldenBtn top ={coordinates.top} left={coordinates.left} onClick={handleClick}>
          <GoldenImg src="images/Cookies/GoldenCookie.png" alt="" />
    </GoldenBtn >}</>
  )
}
