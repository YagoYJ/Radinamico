import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import theme from "../../styles/theme";
import { FooterContainer, Icon, Icons, ParagraphContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div />
      <ParagraphContainer>
        <p>Desenvolvidor por Yago Juan</p>
      </ParagraphContainer>
      <Icons>
        <Icon>
          <a href="https://google.com" target="_blank">
            <FaFacebookF color={theme.colors.gray} size={15} />
          </a>
        </Icon>
        <Icon>
          <a href="https://google.com" target="_blank">
            <FaInstagram color={theme.colors.gray} size={15} />
          </a>
        </Icon>
        <Icon>
          <a href="https://google.com" target="_blank">
            <FaLinkedinIn color={theme.colors.gray} size={15} />
          </a>
        </Icon>
      </Icons>
    </FooterContainer>
  );
}
