import React from "react";
import HectorIMG from "../../../../Imgs/Personagens/Hector.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Hector = () => {
  return (
    <ComponentPersonagem
      img={HectorIMG}
      title="Hector Barbossa
  (Geoffrey Rush)"
      description="Desde o primeiro filme, Barbossa foi um personagem muito divertido. Além de ter uma forte presença, sempre aparenta ter uma carta na manga que o torna ameaçador em vários momentos. Muito da presença de Barbossa vem do excelente Geoffrey Rush, que mostra como o capitão tem orgulho de ser pirata. Tanto que não economiza gargalhadas e berros. Um personagem muito bom de ver em tela."
    />
  );
};

export default Hector;
