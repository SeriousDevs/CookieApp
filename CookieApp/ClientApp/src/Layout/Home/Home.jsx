import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGameAcc} from "redux/gameAccSlice";
import { Dashboard } from "./Dashboard/Dashboard";
import { Main } from "./Main/Main";
import { Upgrades } from "./Upgrades/Upgrades";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGameAcc());
  }, []);

  return (
    <div style={{display: 'flex'}}>
          <Dashboard />
          <Main />
      <Upgrades />
    </div>
  )
}

export default WithAuthRedirect(Home, '/login');
// export default Home;
