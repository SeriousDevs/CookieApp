import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  height: 66px;
  font-weight: bold;
  width: 300px;
  color: ${(props) => (props?.passwordInvalid ? "red" : "black")};
`;

export const LabelCheckbox = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 26px;
  gap: 10px;
  font-weight: 400;
  width: 180px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const RedirectLink = styled(Link)`
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: teal;
    text-decoration: none;
  }
`;

export const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 50px;
`;

export const BoxStyle = styled.div`
  max-height: 115px;
  width: 150px;
  font-size: 12px;
`;

export const BoxStyleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const mount = keyframes`
0%  { transform: translate(0px, 100%);  }
100%{ transform:translate(0px, 0px); }`;

export const MobileContainer = styled.div`
  position: absolute;
  z-index: 5;
  height: 90%;
  width: 100%;
  bottom: 0;
  background-color: tomato;
  animation: ${mount} 0.7s linear;
  padding: 20px 20px 70px 20px;
`;

export const LeadershipItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-height: 50px;
  background-color: rgba(180, 180, 180, 0.5);
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const LeadershipItemUser = styled(LeadershipItem)`
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid gold;
  border-radius: 3px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const Position = styled.p`
  //   font-size: 36px;
`;

export const NetWorth = styled.p`
  //   font-size: 24px;
`;

export const MobileTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
