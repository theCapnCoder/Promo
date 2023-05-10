import React from "react";
import MainCard from "../../components/MainCard";
import { Card } from "../../types";

import cards from "./cards";
import styles from "./free.module.scss";

export const Free = () => {
  return (
    <div className={styles.free}>
      <h2>
        Для вас это абсолютно
        <span> бесплатно!</span>
      </h2>
      <div className={styles.card}>
        {cards.map((card: Card) => (
          <MainCard key={card.id} {...card} type="free" />
        ))}
      </div>
    </div>
  );
};
