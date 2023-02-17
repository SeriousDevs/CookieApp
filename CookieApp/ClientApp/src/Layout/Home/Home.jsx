import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useEffect, useState, Suspense } from "react";
import { getUsersList, getUserTale, setGameAcc } from "redux/gameAccSlice";
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
  const [counter, setCounter] = useState(0);
  const [upgradesCounter, setUpgradesCounter] = useState(0);
  const [goldCounter, setGoldCounter] = useState(0);

  const token = localStorage.getItem("token");
  const isMobScreen = useMediaQuery({ query: "(max-width: 767.98px)" });
  const isTabScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isDescScreen = useMediaQuery({ query: "(min-width: 1279.98px)" });

  useEffect(() => {
    setInterval(() => {
      setCounter((p) => p + 1);
    }, 2000);
    setInterval(() => {
      setUpgradesCounter((p) => p + 1);
    }, 1000);
    setInterval(() => {
      setGoldCounter((p) => p + 1);
    }, Math.floor(Math.random() * 180000) + 90000);
  }, []);

  useEffect(() => {
    if (counter === 0) return;
    setTimeout(() => {
      dispatch(getUsersList());
      dispatch(getUserTale());
    }, 1000);
    dispatch(saveAcc(acc));
  }, [counter]);

  useEffect(() => {
    if (!token) return;
    dispatch(getUserTale());
    dispatch(setGameAcc());
    dispatch(getUsersList());
  }, []);

  return (
    <div style={{position: 'relative'}}>
      {isDescScreen && (
        <div style={{ display: "flex" }}>
          <Dashboard />
          <Main />
          <Upgrades counter={upgradesCounter} />
        </div>
      )}
      {isMobScreen &&
        <Suspense fallback={null}>
          <Outlet/>
          <Main/>
        </Suspense>}
      <GoldenCookie counter={goldCounter} />
    </div>
  );
};

         
export default WithAuthRedirect(Home, '/login');
