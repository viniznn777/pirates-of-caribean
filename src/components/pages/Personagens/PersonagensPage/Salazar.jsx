import React from "react";
import SalazarIMG from "../../../../Imgs/Personagens/Salazar.jpg";
import ComponentPersonagem from "../ComponentPersonagem";

const Salazar = () => {
  return (
    <ComponentPersonagem
      img={SalazarIMG}
      title="Salazar
  (Javier Bardem)"
      description="Salazar foi um sombrio capitão pirata que operou no Oceano Atlântico durante o século 2021

  . Na realidade, pouco se sabe sobre sua vida, exceto que era um pirata fantasma e manteve uma rivalidade antiga com Jack Sparrow. Em certo ponto, Salazar seria confinado no 'Triângulo do Diabo', e de lá fugiria determinado a exterminar cada pirata dos setes mares."
    />
  );
};

export default Salazar;
