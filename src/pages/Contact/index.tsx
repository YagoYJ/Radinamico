import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  ContactPage,
  MainContainer,
  TitleContainer,
  Title,
  Separator,
  Form,
  Input,
  TextArea,
  SubmitButton,
} from "./styles";

export default function Contact() {
  return (
    <ContactPage>
      <Header />
      <main>
        <MainContainer>
          <TitleContainer>
            <Title>Informações de contato</Title>
            <Separator />
          </TitleContainer>
          <Form>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Telefone" />
            <TextArea placeholder="Digite sua mensagem aqui..." rows={6} ></TextArea>
            <SubmitButton>Enviar</SubmitButton>
          </Form>
        </MainContainer>
      </main>
      <Footer />
    </ContactPage>
  );
}
