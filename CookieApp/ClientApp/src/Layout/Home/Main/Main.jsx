import { memo } from "react";
import Cookie from "./Cookie/Cookie";
import { Logout } from "./Logout/Logout";
import { Container } from "./main.styled";
import Statistics from "./Statistics/Statistics";

const Main = () => {
  return (
    <Container>
      <Cookie />
      <Statistics />
      <Logout />
    </Container>
  );
};
export default memo(Main);
