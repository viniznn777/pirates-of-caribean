import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../Imgs/Logo/logo.png";

import React from "react";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link exact="true" to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/personagens">Personagens</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
