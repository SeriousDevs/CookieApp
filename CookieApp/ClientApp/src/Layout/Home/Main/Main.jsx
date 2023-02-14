import { memo } from "react";
import Cookie from "./Cookie/Cookie";
import { Container } from "./main.styled";
import Statistics from "./Statistics/Statistics";

const Main = () => (
  <Container>
    <Cookie />
    <Statistics />
  </Container>
);
export default memo(Main);
