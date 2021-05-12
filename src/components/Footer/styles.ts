import styled from "styled-components";
import theme from "../../styles/theme";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  & > div {
    width: 30%;
  }
`;

export const ParagraphContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    font-weight: bold;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  margin: 0 10px;
`;
