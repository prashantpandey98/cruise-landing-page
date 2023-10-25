import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.credits}>
        © 2023 Go Jolly by Prashant. All rights reserved.
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRsRKPN_YirCjLQgIz-akJhqx2ix9fHs6tG7NcrJA19F72wCilYNbrCkpquYGenyW-ZI&usqp=CAU"
            alt="Facebook"
            className={styles.icon}
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlY4BdIJyzvi8FsNx2vdFe2bbJLxZ7aW1MQ&usqp=CAU"
            alt="Instagram"
            className={styles.icon}
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0T8YqxpFEzASkkPPE5kP6paO8n3H6MXtMQ&usqp=CAU"
            alt="X"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
