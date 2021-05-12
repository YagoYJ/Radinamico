import MediaCard from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Main } from "./styles";

export default function Anatomy() {
  return (
    <div>
      <Header />
      <Main>
        <MediaCard
          imageTitle="Cabeça"
          imageUrl="assets/cabeca.png"
          title="Cabeça"
          paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
        />
        <MediaCard
          imageTitle="Coluna Vertebral"
          imageUrl="assets/coluna-vertebral.png"
          title="Costela"
          paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
        />
        <MediaCard
          imageTitle="Costela"
          imageUrl="assets/costela.png"
          title="Costela"
          paragraph="assadlasndlk asdnasldnlaskn sdnaklsdnnsd aldknsakldnlsn naldklasn"
        />
      </Main>
      <Footer />
    </div>
  );
}
