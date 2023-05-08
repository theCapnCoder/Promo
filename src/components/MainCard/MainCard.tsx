import { FC } from "react";
import classNames from "classnames";

import styles from "./mainCard.module.scss";
import { Card } from "../../types";

type Props = Omit<Card, "id"> & { typeMd?: boolean };

export const MainCard: FC<Props> = ({ title, text, src, alt, typeMd }) => {
  return (
    <div className={styles.card}>
      <img
        className={classNames({ [styles.typeMd]: typeMd })}
        src={src}
        alt={alt}
      />
      <h3 className={classNames({ [styles.typeMd]: typeMd })}>{title}</h3>
      <p className={classNames({ [styles.typeMd]: typeMd })}>{text}</p>
    </div>
  );
};
