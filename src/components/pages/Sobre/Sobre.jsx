import React from "react";
import styles from "./Sobre.module.css";
import BannerAbout from "../../../Imgs/AboutImages/banner.jpg";

const Sobre = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Sobre a Franquia</h1>
      </div>
      <section className={styles.section}>
        <div className={styles.leftSideImage}>
          <img
            src={BannerAbout}
            alt="(Fonte: Disney/Reprodução)"
            draggable="false"
          />
        </div>
        <div className={styles.rightSideWrite}>
          <p>
            Iniciada em 2003, a franquia de filmes Piratas do Caribe foi um
            grande sucesso nos cinemas, trazendo as aventuras do divertido e
            excêntrico pirata Jack Sparrow, interpretado pelo ator Johnny Depp.
          </p>
          <p>
            Diferente do que vemos nos cinemas, com filmes sendo adaptados de
            livros, HQs, games e até de peças de teatro, Piratas do Caribe é uma
            adaptação cinematográfica inspirada no brinquedo presente nos
            parques da Disney, Pirates of the Caribbean.
          </p>
          <p>
            Ao todo, foram 5 filmes lançados e com uma arrecadação que supera a
            marca de US $ 4,5 bilhões em bilheteria, colocando a franquia
            Piratas do Caribe como uma das mais rentáveis da história do cinema.
          </p>
          <span>
            Fonte:&nbsp;
            <a
              href="https://www.disneyplus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disney+
            </a>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
