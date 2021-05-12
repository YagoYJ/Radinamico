import { Link } from "react-router-dom";
import { MenuBar, MenuContainer, MenuItem, MenuList } from "./styles";

export default function DesktopBar() {
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
}
