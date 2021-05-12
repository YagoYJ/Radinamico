import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const BackgroundContainer = styled.div`
  background-image: url("assets/header-background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px 0;
  @media (min-width: 280px) {
    width: 50px;
    height: 50px;
    margin: 25px 0;
  }
  @media (min-width: 450px) {
    width: 80px;
    height: 80px;
    margin: 45px 0;
  }
  @media (min-width: 650px) {
    width: 90px;
    height: 90px;
    margin: 80px 0;
  }
  @media (min-width: 760px) {
    width: 110px;
    height: 110px;
    margin: 80px 0;
  }
  @media (min-width: 950px) {
    width: 150px;
    height: 150px;
    margin: 100px 0;
  }
  @media (min-width: 1150px) {
    margin: 130px 0;
  }
  @media (min-width: 1300px) {
    margin: 170px 0;
  }
`;
