import Button from "../../components/Button";
import MainCard from "../../components/MainCard";
import { Card } from "../../types";

import cards from "./cards";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <h2>
        <span>Получи скидку 50% </span>
        на первый месяц аренды
        <span> или бесплатный переезд!</span>
      </h2>

      <div className={styles.center}>
        <Button />
      </div>

      <div className={styles.cards}>
        {cards.map((card: Card) => {
          return <MainCard key={card.id} {...card} type="main" />;
        })}
      </div>
    </div>
  );
};
