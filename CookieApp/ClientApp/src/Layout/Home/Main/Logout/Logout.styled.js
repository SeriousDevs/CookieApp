import styled from "styled-components";
import { HiLogout } from "react-icons/hi";

export const LogOutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 24vw;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 1279.97px) {
    right: 10px;
    padding: 0;
    background: rgba(159, 159, 168, 0.5);
  }
`;

export const LogOutIcon = styled(HiLogout)`
  fill: white;
  width: 40px;
  height: 40px;
`;
