import { FC } from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

type Props = {
  text: string;
  disabled: boolean;
  large: boolean;
};

export const Button: FC<Partial<Props>> = ({ text, disabled, large }) => {
  return (
    <button className={classNames(styles.button, {[styles.large]: large })} disabled={disabled}>
      {text || "Как это работает"}
    </button>
  );
};
