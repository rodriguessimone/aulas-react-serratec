import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #145A32;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

export const FirstText = styled.div`
  font-size: 3rem;
  color: #fff;
  margin: 1rem;
`;

export const SecondText = styled.div`
  font-size: 20px;
  color: #fff;
  border: 1px;
`;

export const AulaButton = styled.button`
  cursor: pointer;
  background: #784212;
  font-size: 1rem;
  color: #fff;
  border: 2px solid black ;
  border-radius: 0.4rem;
  margin-top: 1rem;
  &:hover {
    background-color: #482B04 ;
    color: #D0D3D4;
  }
`;
