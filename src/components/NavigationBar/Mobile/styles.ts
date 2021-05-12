import styled from "styled-components";
import theme from "../../../styles/theme";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ToggleButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
`;

export const MenuBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
  background-color: ${theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li`
  width: 100%;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  & > a {
    width: 100%;
    height: 100%;
    text-align: center;
    outline: 0;
  }
`;
