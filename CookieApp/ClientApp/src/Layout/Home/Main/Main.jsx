import { memo } from "react";
import { useSelector } from "react-redux";
import { getGoldenCookieClicked } from "redux/gameAccSlice";
import Cookie from "./Cookie/Cookie";
import { Logout } from "./Logout/Logout";
import { Container } from "./main.styled";
import Statistics from "./Statistics/Statistics";

const Main = () => {
  const goldCookie = useSelector(getGoldenCookieClicked);

  return (
    <Container bgChange={goldCookie}>
      <Cookie />
      <Statistics />
      <Logout />
    </Container>
  );
};
export default memo(Main);
