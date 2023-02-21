import styled from "styled-components";


export const UpgradeList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;