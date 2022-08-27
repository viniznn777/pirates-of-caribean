import React from "react";
import styles from "./Personagens.module.css";
import { Link } from "react-router-dom";

import Gibbs from "../../../Imgs/Personagens/Gibbs.jpg";
import BarbaNegra from "../../../Imgs/Personagens/BarbaNegra.jpeg";
import TiaDalma from "../../../Imgs/Personagens/TiaDalma.jpg";
import Swann from "../../../Imgs/Personagens/Swann.jpg";
import Angelica from "../../../Imgs/Personagens/Angelica.jpg";
import Lord from "../../../Imgs/Personagens/Lord.jpg";
import Hector from "../../../Imgs/Personagens/Hector.jpg";
import Jack from "../../../Imgs/Personagens/Jack.jpg";
import Davy from "../../../Imgs/Personagens/Davy.jpg";
import Salazar from "../../../Imgs/Personagens/Salazar.jpg";

const Personagens = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Os 10 melhores personagens</h1>
      </div>
      <section className={styles.sectionPersonagens}>
        <div className={styles.containerPersonagem}>
          <Link to="/gibbs" draggable="false">
            <div>
              <img
                src={Gibbs}
                alt="https://www.facebook.com/PiratesoftheCaribbean/"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Gibbs <br /> (Kevin McNally)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/barbanegra" draggable="false">
            <div>
              <img
                src={BarbaNegra}
                alt="Edward Thatch, o Barba-Negra é um ícone das histórias de piratas (CRÉDITO: BART HEIRD/CC; DISNEY)"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Barba Negra <br /> (Ian McShane)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/tiadalma" draggable="false">
            <div>
              <img src={TiaDalma} alt="Tia Dalma" draggable="false" />
            </div>
          </Link>
          <h5>
            Tia Dalma <br /> (Naomie Harris)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/swann" draggable="false">
            <div>
              <img src={Swann} alt="Swann" draggable="false" />
            </div>
          </Link>
          <h5>
            Elizabeth Swann <br /> (Keira Knightley)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/angelica" draggable="false">
            <div>
              <img src={Angelica} alt="Angelica" draggable="false" />
            </div>
          </Link>
          <h5>
            Angélica <br /> (Penélope Cruz)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/lord" draggable="false">
            <div>
              <img src={Lord} alt="Lord" draggable="false" />
            </div>
          </Link>
          <h5>
            Lorde Cutler Beckett <br /> (Tom Hollander)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/hector" draggable="false">
            <div>
              <img
                src={Hector}
                alt="https://br.pinterest.com/pin/307581849554387845/"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Hector Barbossa <br /> (Geoffrey Rush)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/jack" draggable="false">
            <div>
              <img
                src={Jack}
                alt="https://wallpapercave.com/captain-jack-sparrow-johnny-depp-wallpapers"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Capitão Jack Sparrow <br /> (Johnny Depp)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/davyjones" draggable="false">
            <div>
              <img
                src={Davy}
                alt="https://www.pinterest.de/pin/578571883354620246/"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Davy Jones <br /> (Bill Nighy)
          </h5>
        </div>

        <div className={styles.containerPersonagem}>
          <Link to="/salazar" draggable="false">
            <div>
              <img
                src={Salazar}
                alt="https://www.pinterest.de/pin/578571883354620246/"
                draggable="false"
              />
            </div>
          </Link>
          <h5>
            Salazar <br /> (Javier Bardem)
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Personagens;
