import { FC } from "react";

import styles from "./button.module.css";

type Props = {
  text: string;
  disabled: boolean;
};

export const Button: FC<Partial<Props>> = ({ text, disabled }) => {
  return (
    <button className={styles.button} disabled={disabled}>
      {text || "Оставить заявку"}
    </button>
  );
};
