import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AnatomyGroupContainer } from "./styles";

interface ParamsProps {
  slug: string;
}

export default function AnatomyGroup() {
  const { slug } = useParams<ParamsProps>();

  return (
    <AnatomyGroupContainer>
      <Header /> <div>Grupo anatomico: {slug}</div> <Footer />
    </AnatomyGroupContainer>
  );
}
