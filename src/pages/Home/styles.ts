import styled from "styled-components";
import theme from "../../styles/theme";

export const HomePage = styled.div`
  width: 100%;
  flex: 1;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 80px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 100px 50px;
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 250px;
    height: 250px;
    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  background-color: ${theme.colors.yellow};
`;

export const Separator = styled.div`
  width: 20%;
  border: 1px solid ${theme.colors.black};
  margin: 10px 0;
`;

export const Description = styled.div`
  width: 100%;
  & > p {
    color: ${theme.colors.black};
    text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
    line-height: 1.4em;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: start;
    margin-bottom: 20px;
  }
`;
