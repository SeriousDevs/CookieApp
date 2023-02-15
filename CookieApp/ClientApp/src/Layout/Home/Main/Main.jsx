import { memo } from "react";
import { useSelector } from "react-redux";
import { getGoldenCookieClicked } from "redux/gameAccSlice";
import Cookie from "./Cookie/Cookie";
import { Logout } from "./Logout/Logout";
import { Container } from "./main.styled";
import Statistics from "./Statistics/Statistics";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const goldCookie = useSelector(getGoldenCookieClicked);
  const isMobScreen = useMediaQuery({ query: "(max-width: 767.98px)" });
  const isTabScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isDescScreen = useMediaQuery({ query: "(min-width: 1279.98px)" });
  return (<>
    {isDescScreen && <Container bgChange={goldCookie}>
      <Cookie />
      <Statistics />
      <Logout />
    </Container>}
    
    {isMobScreen && <Container bgChange={goldCookie}>
      <Cookie />
    </Container>}
    
    </>
  );
};
export default memo(Main);
