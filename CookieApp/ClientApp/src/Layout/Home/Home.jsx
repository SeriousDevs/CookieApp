import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useEffect, useState } from "react";
import { getUsersList, setGameAcc} from "redux/gameAccSlice";
import { Dashboard } from "./Dashboard/Dashboard";
import { Main } from "./Main/Main";
import { Upgrades } from "./Upgrades/Upgrades";
import { getAcc, saveAcc } from "redux/gameAccSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const acc = useSelector(getAcc);
  const [counter, setCounter] = useState(0);
  const [upgradesCounter, setUpgradesCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(p=> p +1)
    }, 30000);
    setInterval(() => {
      setUpgradesCounter(p=> p +1)
    }, 1000);
  }, []);
  
  useEffect(() => {
    if (counter === 0) return;
    dispatch(saveAcc(acc));
  }, [counter]);

  useEffect(() => {
    dispatch(setGameAcc());
    dispatch(getUsersList());
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <Main />
      <Upgrades counter={upgradesCounter} />
    </div>
  )
}

export default WithAuthRedirect(Home, '/login');
// export default Home;
