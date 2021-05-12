import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopBar from "../NavigationBar/Desktop";
import MobileBar from "../NavigationBar/Mobile";
import { BackgroundContainer, HeaderContainer, Logo } from "./styles";

export default function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <HeaderContainer>
      <BackgroundContainer>
        <Link to="/">
          <Logo src="/assets/logo.png" />
        </Link>
      </BackgroundContainer>
      {windowSize < 700 ? <MobileBar /> : <DesktopBar />}
    </HeaderContainer>
  );
}
