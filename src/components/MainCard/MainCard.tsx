import { FC } from "react";

import styles from "./mainCard.module.scss";

type Props = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export const MainCard: FC<Props> = ({ title, text, src, alt }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
