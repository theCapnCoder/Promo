import { FC } from "react";
import classNames from "classnames";

import styles from "./mainCard.module.scss";
import { Card } from "../../types";

type Props = Omit<Card, "id"> & {
  type: "main" | "free" | "offer" | "bonus";
};

export const MainCard: FC<Props> = ({ title, text, src, alt, type }) => {
  return (
    <div className={classNames(styles.card, styles[type])}>
      <div className={styles.imgWrapper}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.infoWrapper}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
