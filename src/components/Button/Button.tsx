import { FC } from "react";

import styles from "./button.module.scss";

type Props = {
  text: string;
  disabled: boolean;
};

export const Button: FC<Partial<Props>> = ({ text, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled}>
      {text || "Как это работает"}
    </button>
  );
};
