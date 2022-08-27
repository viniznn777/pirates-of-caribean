import React from "react";
import Slider from "./Slider";
import styles from "./Home.module.css";
import Disney from "../../../Imgs/svg/disney.svg";
import HBOCHANNEL from "../../../Imgs/svg/hbo.svg";
import BrinquedoPiratas from "../../../Imgs/ImgsCuriosidades/brinquedo_piratas_do_caribe.jpg";
import Keith from "../../../Imgs/ImgsCuriosidades/Keith.jpg";
import Paul from "../../../Imgs/ImgsCuriosidades/paul.jpg";

const Home = () => {
  return (
    <>
      <Slider />
      <section className={styles.ondeAssistir}>
        <div className={styles.title}>
          <h1>Onde assistir posso assistir?</h1>
        </div>
        <div className={styles.LogoOndeAssitir}>
          <a
            href="https://www.disneyplus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Disney} alt="Disney" draggable="false" />
          </a>
          <a
            href="https://www.hbo.com/schedule"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HBOCHANNEL} alt="Hbo channel" draggable="false" />
          </a>
        </div>
      </section>
      <section className={styles.curiosidades}>
        <div className={styles.title}>
          <h1>Curiosidades</h1>
        </div>
        <div className={styles.containerCuriosidades}>
          <div className={styles.leftSideCuriosidades}>
            <div className={styles.containerImageCuriosidades}>
              <img src={BrinquedoPiratas} alt="Brinquedo" draggable="false" />
            </div>
          </div>
          <div className={styles.rightSideCuriosidades}>
            <h1>Não era filme!</h1>
            <div>
              <p>
                Todo mundo sabe que o parque temático da Disney possui diversos
                brinquedos baseados em filmes e animações. Mas você sabia que
                Piratas do Caribe, na verdade, era um brinquedo inicialmente e,
                só depois virou filme? Pois é!
              </p>
            </div>
            <a
              href="https://www.tricurioso.com/2020/04/25/as-melhores-curiosidades-sobre-piratas-do-caribe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Fonte</button>
            </a>
          </div>
        </div>

        <div className={styles.containerCuriosidadesReverse}>
          <div className={styles.rightSideCuriosidadesReverse}>
            <div className={styles.containerImageCuriosidades}>
              <img src={Keith} alt="Keith" draggable="false" />
            </div>
          </div>
          <div className={styles.leftSideCuriosidadesReverse}>
            <h1>Pirata Stones!</h1>
            <div>
              <p>
                Essa informação, provavelmente, apenas os fãs de Rolling Stones
                vão saber. O guitarrista Keith Richards foi convidado para
                interpretar o pai de Jack Sparrow. Esta foi uma decisão muito
                acertada, pois o próprio Depp afirmou ter se baseado em Keith
                para criar o personagem.
              </p>
            </div>
            <a
              href="https://www.tricurioso.com/2020/04/25/as-melhores-curiosidades-sobre-piratas-do-caribe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Fonte</button>
            </a>
          </div>
        </div>

        <div className={styles.containerCuriosidades}>
          <div className={styles.leftSideCuriosidades}>
            <div className={styles.containerImageCuriosidades}>
              <img src={Paul} alt="Brinquedo" draggable="false" />
            </div>
          </div>
          <div className={styles.rightSideCuriosidades}>
            <h1>Tio McCartney!</h1>
            <div>
              <p>
                E Keith não foi o único astro do rock a participar da franquia.
                Isso porque, em 2017, Paul McCartney fez uma participação no
                filme A Vingança de Salazar. Ele interpretou o Tio Jack.
              </p>
            </div>
            <a
              href="https://www.tricurioso.com/2020/04/25/as-melhores-curiosidades-sobre-piratas-do-caribe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Fonte</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
