import styled from "styled-components";

export const ProfileBlock = styled.div`
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-bottom: 1px solid white;
  max-height: 50%;
`;

export const UserName = styled.p`
  color: white;
  font-size: 28px;
  display: block;
  margin: 0;
`;

export const ProfileButton = styled.button`
  position: absolute;
  top: 20%;
  ${({ right }) => (right ? "right: 5px;" : "left: 5px;")}

  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000000;
  }

  &:active {
    transform: translateY(2px);
  }
`;
