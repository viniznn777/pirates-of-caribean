import React from "react";
import Gibbs from "../../../../Imgs/Personagens/Gibbs.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Gibs = () => {
  return (
    <ComponentPersonagem
      img={Gibbs}
      title="Gibbs (Kevin McNally)"
      description="O fiel escudeiro e primeiro imeditato de Jack Sparrow no Pérola Negra, Gibbs é o tipo de conselheiro que todos nós gostaríamos de ter. Claro, quando não está se embebando de rum ou deixando que o navio seja roubado, Gibbs é um ótimo pirata, e a performance de Kevin McNally é um dos aspectos mais subestimados da franquia."
    />
  );
};

export default Gibs;
