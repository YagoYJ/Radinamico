import styled from "styled-components";
import theme from "../../../styles/theme";

export const MenuContainer = styled.div`
  background-color: ${theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuBar = styled.nav`
  width: 80%;
  height: 70px;
  background-color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
      transition: 0.3;
    }
  }
`;
