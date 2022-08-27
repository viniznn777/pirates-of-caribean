import React from "react";
import SwannIMG from "../../../../Imgs/Personagens/Swann.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Swann = () => {
  return (
    <ComponentPersonagem
      img={SwannIMG}
      title="Elizabeth Swann
    (Keira Knightley)"
      description="No primeiro filme, Elizabeth Swann é quase insuportável. Limitada ao arquétipo da donzela em perigo que mais provoca problemas do que soluciona, o quadro se transforma quando a filha do governador ganha mais força e coragem nas continuações, trazendo ali uma personagem feminina forte e destemida, especialmente durante seu arco isolado no segundo filme – chegando até mesmo a sacrificar Jack Sparrow na tentativa de salvar seus amigos."
    />
  );
};

export default Swann;
