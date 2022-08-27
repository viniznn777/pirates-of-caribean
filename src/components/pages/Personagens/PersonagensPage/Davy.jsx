import React from "react";
import DavyIMG from "../../../../Imgs/Personagens/Davy.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Davy = () => {
  return (
    <ComponentPersonagem
      img={DavyIMG}
      title="Davy Jones
  (Bill Nighy)"
      description="Além de ter uma excelente concepção visual, Jones é o personagem mais complexo da franquia. Não é apenas um vilão cruel que faz maldades, porque ele é movido por um sentimento humano como qual ele reprime, que o fez o transformar em um monstro. É um personagem humano que tem várias camadas. Muito se vale ao ótimo trabalho de Bill Nighy que via nos mostrando que mesmo tendo uma aparência monstruosa, Jones ainda tem um lado humano dentro dele."
    />
  );
};

export default Davy;
