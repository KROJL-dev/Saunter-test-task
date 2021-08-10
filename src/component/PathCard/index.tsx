import React from "react";

import styles from "./style.module.scss";

import { FOURARROWICON, NEXTICON } from "sources/img/Img";

import { IPath } from "models/path";

interface IProps {
  pathData: IPath;
}
const PathCard: React.FC<IProps> = ({ pathData }) => {
  return (
    <div className={styles.pathContainer}>
      <img src={FOURARROWICON} alt="logo" className={styles.logoImg} />
      <div className={styles.cardTextWrapper}>
        <p className={styles.title}>{pathData.title}</p>
        <p className={styles.description}>{pathData.description}</p>
      </div>
      <p className={styles.pathSize}>
        {pathData.pathSize}
        <img src={NEXTICON} alt=">" className={styles.nextIcon} />
      </p>
    </div>
  );
};
export default PathCard;
