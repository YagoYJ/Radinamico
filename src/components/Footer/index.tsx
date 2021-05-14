import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import theme from "../../styles/theme";
import { FooterContainer, Icon, Icons, ParagraphContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div />
      <ParagraphContainer>
        <p>
          Desenvolvido por{" "}
          <a
            href="http://linkedin.com/in/yagoyj"
            target="_blank"
            rel="noreferrer"
          >
            Yago Juan
          </a>
        </p>
      </ParagraphContainer>
      <Icons>
        <Icon>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaFacebookF color={theme.colors.gray} size={15} />
          </a>
        </Icon>
        <Icon>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaInstagram color={theme.colors.gray} size={15} />
          </a>
        </Icon>
        <Icon>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn color={theme.colors.gray} size={15} />
          </a>
        </Icon>
      </Icons>
    </FooterContainer>
  );
}
