import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useEffect, useState, Suspense, useLayoutEffect } from "react";
import { getUpgrades, getUsersList, getUserTale, setGameAcc, upgradeTick } from "redux/gameAccSlice";
import Dashboard from "./Dashboard/Dashboard";
import Main from "./Main/Main";
import Upgrades from "./Upgrades/Upgrades";
import { getAcc, saveAcc } from "redux/gameAccSlice";
import { useDispatch, useSelector } from "react-redux";
import { GoldenCookie } from "common/components/GoldenCookie/GoldenCookie";
import { useMediaQuery } from "react-responsive";
import { Outlet } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const acc = useSelector(getAcc);
  const upgrades = useSelector(getUpgrades)

  const [counter, setCounter] = useState(0);
  const [upgradesCounter, setUpgradesCounter] = useState(0);
  const [goldCounter, setGoldCounter] = useState(0);
  
  const token = localStorage.getItem("token");

  const isTabScreen = useMediaQuery({ query: "(max-width: 1279.97px)" });
  const isDescScreen = useMediaQuery({ query: "(min-width: 1279.98px)" });

  useLayoutEffect(() => {
    if (upgradesCounter === 0) return;
    const totalTick = upgrades.reduce((acc, upgr) => (acc += upgr.currentValue * upgr.amount), 0)
     dispatch(upgradeTick(totalTick));
}, [upgradesCounter]); 
  
  useEffect(() => {
  const intervalId = setInterval(() => {
    setCounter((p) => p + 1);
  }, 2000);
    
  const intervalUpgrades = setInterval(() => {
    setUpgradesCounter((p) => p + 1);
  }, 1000);

  const randomIntervalId = setInterval(() => {
    setGoldCounter((p) => p + 1);
  }, Math.floor(Math.random() * 180000) + 90000);

  return () => {
    clearInterval(intervalId);
    clearInterval(randomIntervalId);
    clearInterval(intervalUpgrades);
  };
}, []);

useLayoutEffect(() => {
  if (counter === 0) return;

  const timeoutId = setTimeout(() => {
    dispatch(getUsersList());
    dispatch(getUserTale());
    dispatch(saveAcc(acc));
  }, 1000);

  return () => clearTimeout(timeoutId);
}, [counter]);

useEffect(() => {
  if (!token) return;

  dispatch(getUserTale());
  dispatch(setGameAcc());
  dispatch(getUsersList());
}, [token]);
  
  return (
    <div style={{position: 'relative'}}>
      {isDescScreen && (
        <div style={{ display: "flex" }}>
          <Dashboard />
          <Main />
          <Upgrades/>
        </div>
      )}
      {isTabScreen &&<>
        <Suspense fallback={null}>
          <Outlet />
          </Suspense>
        <Main/>
      </>
        }
      <GoldenCookie counter={goldCounter} />
    </div>
  );
};

         
export default WithAuthRedirect(Home, '/login');
