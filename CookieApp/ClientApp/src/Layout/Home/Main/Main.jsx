import { memo } from "react";
import { useSelector } from "react-redux";
import { getGoldenCookieClicked } from "redux/gameAccSlice";
import Cookie from "./Cookie/Cookie";
import { Logout } from "./Logout/Logout";
import { Container } from "./main.styled";
import Statistics from "./Statistics/Statistics";
import { useMediaQuery } from "react-responsive";
import { AppBar } from "../Mobile/AppBar/AppBar";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const goldCookie = useSelector(getGoldenCookieClicked);
  const isTabScreen = useMediaQuery({ query: "(max-width: 1279.97px)" });
  const isDescScreen = useMediaQuery({ query: "(min-width: 1279.98px)" });
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/home') return;
    navigate('/home');
  }
  return (<>
    {isDescScreen && <Container bgChange={goldCookie}>
      <Cookie />
      <Statistics />
      <Logout />
    </Container>}
    
    {isTabScreen &&<>
       <Container onClick={handleClick}  bgChange={goldCookie}>
      <Cookie />
       <Logout />
    </Container>
      <AppBar/>
    </>
    }
    
    </>
  );
};
export default memo(Main);
