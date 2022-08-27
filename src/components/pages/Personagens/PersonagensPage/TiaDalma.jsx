import React from "react";
import ComponentPersonagem from "../ComponentPersonagem";
import TiaDalmaIMG from "../../../../Imgs/Personagens/TiaDalma.jpg";

const TiaDalma = () => {
  return (
    <ComponentPersonagem
      img={TiaDalmaIMG}
      title="Tia Dalma
    (Naomie Harris)"
      description="Apesar da reviravolta, que ocorre no terceiro filme, quanto a sua real identidade ser – no mínimo – forçada, Tia Dalma sempre mostrou ser uma personagem interessante por guardar um grande mistério quanto ao seu passado. Muito desse mistério vem por conta da performance de Naomie Harris que criava uma ambiguidade sobre as suas reais intenções. Apesar do seu destino, Tia Dalma foi uma personagem bem interessante."
    />
  );
};

export default TiaDalma;
