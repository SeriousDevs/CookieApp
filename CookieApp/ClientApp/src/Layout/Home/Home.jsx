// import WithAuthRedirect from "HOC/WithAuthRedirect";
import { Dashboard } from "./Dashboard/Dashboard";
import { Main } from "./Main/Main";
import { Upgrades } from "./Upgrades/Upgrades";

const Home = () => {
  return (
    <div style={{display: 'flex'}}>
          <Dashboard />
          <Main />
          <Upgrades />
    </div>
  )
}

// export default WithAuthRedirect(Home, '/login');
export default Home;
