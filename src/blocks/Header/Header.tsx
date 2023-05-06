import classNames from "classnames";
import Button from "../../components/Button";
import { HeaderCard } from "./HeaderCard";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className="container">
      <h2
        className={classNames(
          styles.title,
          "m-auto mb-[20px] max-w-[290px] text-center sm:max-w-none"
        )}
      >
        <span className="font-bold">Получи скидку 50% </span>
        на первый месяц аренды
        <span className="font-bold"> или бесплатный переезд!</span>
      </h2>
      <div className="flex justify-center mb-[40px]">
        <Button text="Как это работает" />
      </div>
      <HeaderCard />
    </div>
  );
};
