import React from "react";
import styles from "./ComponentPersonagem.module.css";

const ComponentPersonagem = ({ img, title, description }) => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>PERSONAGEM</h1>
      </div>
      <img src={img} alt={title} draggable="false" />
      <h3>{title}</h3>
      <div className={styles.containerDescription}>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ComponentPersonagem;
