// import { useParams } from "react-router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AnatomyGroupContainer, ImageContainer } from "./styles";

// interface ParamsProps {
//   slug: string;
// }

export default function AnatomyGroup() {
  // const { slug } = useParams<ParamsProps>();

  function showMessage() {
    alert("ok");
  }

  return (
    <AnatomyGroupContainer>
      <Header />
      <main>
        <ImageContainer>
          <img
            src="/assets/HeadPoints/cranio-frontal.png"
            alt="Cranio frontal"
            useMap="#frontal"
          />
          <map name="frontal">
            <area
              shape="rect"
              coords="228,114,258,155"
              onMouseOver={showMessage}
              alt="Ponto 1"
            />
          </map>
        </ImageContainer>
      </main>
      <Footer />
    </AnatomyGroupContainer>
  );
}
