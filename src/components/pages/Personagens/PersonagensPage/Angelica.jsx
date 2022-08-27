import React from "react";
import AngelicaIMG from "../../../../Imgs/Personagens/Angelica.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Angelica = () => {
  return (
    <ComponentPersonagem
      img={AngelicaIMG}
      title="Angélica
  (Penélope Cruz)"
      description="Novamente: Navegando em Águas Misteriosas é o pior filme da saga, mas alguns poucos elementos se salvam. Além do já mencionado Barba Negra de Ian McShane, precisamos reforçar o quão divertida e carismática Penélope Cruz estava no papel de Angélica. Uma ex-namorada de Jack Sparrow, a personagem é o tipo de perfil que bate de frente com Sparrow, além de compartilhar alguns de seus traços, como o humor e a sagacidade. "
    />
  );
};

export default Angelica;
