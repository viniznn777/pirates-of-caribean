import React from "react";
import JackIMG from "../../../../Imgs/Personagens/Jack.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Jack = () => {
  return (
    <ComponentPersonagem
      img={JackIMG}
      title="Capitão Jack Sparrow
  (Johnny Depp)"
      description="O personagem que segura a franquia e que lhe rendeu a primeira indicação de Johnny Depp ao Oscar de Melhor Ator em 2003. Jack é o personagem mais carismático por sua excentricidade e por ser competente de uma maneira completamente desleixada, que deixa na duvida se foi na sorte ou se foi planejado. Apesar de do quarto filme mostrar que não serve para ser protagonista, o Capitão Jack Sparrow é um personagem que merece destaque."
    />
  );
};

export default Jack;
