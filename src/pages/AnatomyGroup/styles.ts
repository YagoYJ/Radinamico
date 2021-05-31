import styled from "styled-components";
import theme from "../../styles/theme";

export const AnatomyGroupContainer = styled.div`
  width: 100%;
`;
export const ImageContainer = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black};
  padding: 50px auto;
  & > img {
    max-width: 90%;
    height: 100%;
    max-height: 700px;
  }
`;
