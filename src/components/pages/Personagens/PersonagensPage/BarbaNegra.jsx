import React from "react";
import ComponentPersonagem from "../ComponentPersonagem";
import BarbaNegraIMG from "../../../../Imgs/Personagens/BarbaNegra.jpeg";

const BarbaNegra = () => {
  return (
    <ComponentPersonagem
      img={BarbaNegraIMG}
      title="Barba Negra
    (Ian McShane)"
      description="Até o momento o único personagem historicamente real da franquia. Apesar do quarto filme ser o mais fraco, Barba Negra vale pela sua presença. É o vilão mais cruel com quem Jack Sparrow cruzou, não medindo esforços para conseguir os seus objetivos. Destaque para a presença magnética de McShane e pela frieza que dá ao interpretar o mais terrível dos piratas."
    />
  );
};

export default BarbaNegra;
