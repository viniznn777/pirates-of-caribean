import React from "react";
import LordIMG from "../../../../Imgs/Personagens/Lord.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Lord = () => {
  return (
    <ComponentPersonagem
      img={LordIMG}
      title="Lorde Cutler Beckett
  (Tom Hollander)"
      description="Mesmo que povoada por diversas figuras maléficas e perigosas, talvez nenhum tenha sido tão detestável e odioso quanto o Lorde Cutler Beckett, o líder da companhia das Índias Orientais e principal antagonista de O Baú da Morte e No Fim do Mundo, sendo capaz de dominar até mesmo o poderoso Davy Jones e usá-lo a seu favor. É um personagem manipulador, e a performance maliciosa de Tom Hollander é o bastante para o espectador desejar logo sua despedida."
    />
  );
};

export default Lord;
