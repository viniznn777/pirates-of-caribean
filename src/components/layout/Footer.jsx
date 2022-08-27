import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5>
          created by
          <a
            href="https://www.instagram.com/viniciuskauandev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @viniciuskauandev
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
