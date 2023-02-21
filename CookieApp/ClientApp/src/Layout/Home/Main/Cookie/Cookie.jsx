import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCookie,
  getClickUpgr,
  getCookies,
  getGoldenCookieClicked,
  getPerSec,
} from "redux/gameAccSlice";
import {
  CookieButton,
  CookieContainer,
  CookieQuantity,
  PerSecond,
  CookieImage,
  CookieLight,
} from "./Cookie.styled";
import { ClickEffect } from "./ClickEffect/ClickEffect";
import { seriousNumbers } from "common/ConvertFunc/convertFunc";

const Cookie = () => {
  const dispatch = useDispatch();
  const cookie = useSelector(getCookies);
  const perSec = useSelector(getPerSec);
  const clickUpgrade = useSelector(getClickUpgr);
  const goldCookie = useSelector(getGoldenCookieClicked);

  const [shake, setShake] = useState(false);
  const [perClick, setPerClick] = useState(1);
  const [mouseCoordinates, setMouseCoordinates] = useState({});
  const [clicked, setClicked] = useState(false);
  const [cookieEmotion, setCookieEmotion] = useState(false);
  const [emotion, setEmotion] = useState(null);

  useEffect(() => {
    const {level} = clickUpgrade;
    setPerClick(goldCookie ? 5 * 2 ** (level - 1) : 2 ** (level - 1));
  }, [clickUpgrade, goldCookie]);

  const handleClicker = useCallback((e) => {
    clearTimeout(emotion);
    if (!e.clientX && !e.clientY) return;

    setCookieEmotion(true);
    setClicked(true);

    dispatch(addCookie(perClick));

    //Animation
    setEmotion(
      setTimeout(() => {
        setCookieEmotion(false);
      }, 1500)
    );

    setMouseCoordinates({ left: e.clientX, top: e.clientY });
    setTimeout(() => {
      setClicked(false);
    }, 1000);

    setShake(true);
    setTimeout(() => setShake(false), 10);
  }, [dispatch, perClick]);

  return (
    <>
      <CookieContainer>
        <CookieQuantity>
          {seriousNumbers(Math.round(cookie))} Cookies
        </CookieQuantity>
        <PerSecond> per second: {seriousNumbers(perSec)} </PerSecond>

        <CookieButton
          onClick={handleClicker}
          className={shake ? `shake` : null}
          type="button"
        >
          <CookieLight />
          <CookieImage
            src={
              cookieEmotion
                ? "images/Cookies/CookieHappy.png"
                : "images/Cookies/CookieSad.png"
            }
            alt="cookie image"
          />
        </CookieButton>
      </CookieContainer>
      {clicked && <ClickEffect obj={mouseCoordinates} value={perClick} />}
    </>
  );
};

export default memo(Cookie);
