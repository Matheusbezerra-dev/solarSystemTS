import styled from "styled-components";

export const ContainerMission = styled.section`
  background: linear-gradient(0deg, rgba(24, 26, 37, 0.5), rgba(24, 26, 37, 0.5));
  border: 1px solid rgba(255, 255, 255, 1);
  width: 495px;
  height: 190px;
  border-radius: 17px;
  margin: 10px;
  div {
    height: 50%;
  }
`;

export const DivMissionAside1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255 255 255);
  div{
    display: flex;
    align-items: center;
    width: 450px;
    text-transform: uppercase;
    font-weight: 300;
    font-family: Epilogue;
  }
`;

export const DivMissionAside = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: rgb(255 255 255);
    font-weight: 400;
    font-family: Epilogue;
  }
  
  div img {
    width: 15px;
    height: 18px;
    margin-right: 5px;
  }
`;
