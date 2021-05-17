import MediaCard from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { MainContainer } from "./styles";

export default function Anatomy() {
  return (
    <div>
      <Header />
      <main>
        <MainContainer>
          <MediaCard
            imageTitle="Cabeça"
            imageUrl="assets/cabeca.png"
            title="Cabeça"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="cabeca"
          />
          <MediaCard
            imageTitle="Coluna Vertebral"
            imageUrl="assets/coluna-vertebral.png"
            title="Coluna Vertebral"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="coluna-vertebral"
          />
          <MediaCard
            imageTitle="Costela"
            imageUrl="assets/costela.png"
            title="Costela"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="costela"
          />
          <MediaCard
            imageTitle="Membros Inferiores"
            imageUrl="assets/membros-inferiores.png"
            title="Membros Inferiores"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="membros-inferiores"
          />
          <MediaCard
            imageTitle="Membros superiores"
            imageUrl="assets/membros-superiores.png"
            title="Membros Superiores"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="membros-superiores"
          />
          <MediaCard
            imageTitle="Esterno"
            imageUrl="assets/esterno.png"
            title="Esterno"
            paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
            slug="esterno"
          />
        </MainContainer>
      </main>
      <Footer />
    </div>
  );
}
