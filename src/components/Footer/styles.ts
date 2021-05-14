import styled from "styled-components";
import theme from "../../styles/theme";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > div {
    width: 100%;
    @media (min-width: 900px) {
      width: 30%;
    }
  }
`;

export const ParagraphContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    margin-bottom: 0;
  }

  & > p {
    font-weight: bold;
    text-align: center;

    & > a {
      text-decoration: underline;
      color: #069;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: flex-end;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 10px;
  padding: 10px;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
