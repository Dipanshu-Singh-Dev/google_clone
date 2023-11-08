import React from "react";
import styles from "./NavbarHome.module.css";
import ExternalLink from "../ExternalLink/ExternalLink";
import Icon from "../Icons/Icon";
const NavbarHome = () => {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.NavItems}>
        <div className={styles.ExternalLinks}>
          <ExternalLink title="Gmail" type="head" />
          <ExternalLink title="Images" type="head" />
        </div>
        <div className={styles.Icons}>
          <Icon name="apps" />
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
