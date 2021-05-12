import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  ButtonContainer,
  MenuBar,
  MenuContainer,
  MenuItem,
  MenuList,
  ToggleButton,
} from "./styles";
import theme from "../../../styles/theme";

export default function MobileBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <MenuContainer>
      <ButtonContainer>
        {!isVisible ? (
          <ToggleButton onClick={() => setIsVisible(true)}>
            <FaBars size={20} color={theme.colors.white} />
          </ToggleButton>
        ) : (
          <ToggleButton onClick={() => setIsVisible(false)}>
            <FaTimes size={20} color={theme.colors.white} />
          </ToggleButton>
        )}
      </ButtonContainer>
      {isVisible && (
        <MenuBar>
          <MenuList>
            <MenuItem>
              <Link to="/">Início</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/anatomia">Anatomia</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Contato</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Sobre</Link>
            </MenuItem>
          </MenuList>
        </MenuBar>
      )}
    </MenuContainer>
  );
}
