import Header from "../../components/Header";
import {
  Description,
  DescriptionContainer,
  HomePage,
  LogoContainer,
  Main,
  Separator,
  Title,
} from "./styles";

export default function Home() {
  return (
    <HomePage>
      <Header />
      <Main>
        <LogoContainer>
          <img src="assets/logo.png" alt="Logo Radinâmico" />
        </LogoContainer>
        <DescriptionContainer>
          <Title>Radinâmico</Title>
          <Separator />
          <Description>
            <p>
              Esse projeto foi criado para ajudar VOCÊ que é aluno(a) ou
              profissional da área da saúde em geral, com um FOCO TOTAL EM
              RADIOLOGIA.
            </p>
            <p>
              Como o próprio nome do projeto já diz, adquirindo conhecimentos de
              uma forma mais dinâmica. 😉
            </p>
            <p>Sou o Prof. Matheus Albuquerque e espero que gostem!!</p>
          </Description>
        </DescriptionContainer>
      </Main>
    </HomePage>
  );
}
