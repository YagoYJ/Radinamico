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
            slug="cabeca"
          />
          <MediaCard
            imageTitle="Coluna Vertebral"
            imageUrl="assets/coluna-vertebral.png"
            title="Coluna Vertebral"
            slug="coluna-vertebral"
          />
          <MediaCard
            imageTitle="Costela"
            imageUrl="assets/costela.png"
            title="Costela"
            slug="costela"
          />
          <MediaCard
            imageTitle="Membros Inferiores"
            imageUrl="assets/membros-inferiores.png"
            title="Membros Inferiores"
            slug="membros-inferiores"
          />
          <MediaCard
            imageTitle="Membros superiores"
            imageUrl="assets/membros-superiores.png"
            title="Membros Superiores"
            slug="membros-superiores"
          />
          <MediaCard
            imageTitle="Esterno"
            imageUrl="assets/esterno.png"
            title="Esterno"
            slug="esterno"
          />
        </MainContainer>
      </main>
      <Footer />
    </div>
  );
}
