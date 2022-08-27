import React from "react";
import filme1 from "../../../Imgs/AboutImages/filme1.jpg";
import filme2 from "../../../Imgs/AboutImages/filme2.jpg";
import filme3 from "../../../Imgs/AboutImages/filme3.jpg";
import filme4 from "../../../Imgs/AboutImages/filme4.jpg";
import filme5 from "../../../Imgs/AboutImages/filme5.jpg";
import styles from "./Filmes.module.css";

const Filmes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Ordem Cronológica de Piratas do Caribe</h1>
      </div>
      <section className={styles.sectionConology}>
        <div className={styles.containerFilme}>
          <a
            href="https://pt.wikipedia.org/wiki/Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={filme1}
              alt="Piratas do Caribe: A Maldição do Pérola Negra"
              draggable="false"
            />
          </a>
          <p>
            <span>Piratas do Caribe</span> <br /> A Maldição do Pérola Negra
          </p>
        </div>

        <div className={styles.containerFilme}>
          <a
            href="https://pt.wikipedia.org/wiki/Pirates_of_the_Caribbean:_Dead_Man's_Chest"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={filme2}
              alt="Piratas do Caribe: O Baú da Morte"
              draggable="false"
            />
          </a>
          <p>
            <span>Piratas do Caribe</span> <br /> O Baú da Morte
          </p>
        </div>

        <div className={styles.containerFilme}>
          <a
            href="https://pt.wikipedia.org/wiki/Pirates_of_the_Caribbean:_At_World's_End"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={filme3}
              alt="Piratas do Caribe: No Fim do Mundo"
              draggable="false"
            />
          </a>
          <p>
            <span>Piratas do Caribe</span> <br /> No Fim do Mundo
          </p>
        </div>

        <div className={styles.containerFilme}>
          <a
            href="https://pt.wikipedia.org/wiki/Pirates_of_the_Caribbean:_On_Stranger_Tides"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={filme4}
              alt="Piratas do Caribe:  Navegando em Águas Misteriosas"
              draggable="false"
            />
          </a>
          <p>
            <span>Piratas do Caribe</span> <br /> Navegando em Águas Misteriosas
          </p>
        </div>

        <div className={styles.containerFilme}>
          <a
            href="https://pt.wikipedia.org/wiki/Pirates_of_the_Caribbean:_Dead_Men_Tell_No_Tales"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={filme5}
              alt="Piratas do Caribe: A Vingança de Salazar"
              draggable="false"
            />
          </a>
          <p>
            <span>Piratas do Caribe</span> <br /> A Vingança de Salazar
          </p>
        </div>
      </section>
    </div>
  );
};

export default Filmes;
