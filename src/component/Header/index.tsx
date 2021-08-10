import React from "react";

import styles from "./style.module.scss";

import { FOURARROWICON } from "sources/img/Img";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoPart}>
        <img src={FOURARROWICON} alt="logo" className={styles.logoImg} />
        <h2 className={styles.logoText}>Saunter</h2>
      </div>
      <button className={styles.addPathBtn}>Add path</button>
    </div>
  );
};
export default Header;
