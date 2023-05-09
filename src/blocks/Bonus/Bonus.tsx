import React from "react";
import cards from "./cards";

import styles from "./bonus.module.scss";
import { Card } from "../../types";
import MainCard from "../../components/MainCard";

export const Bonus = () => {
  return (
    <div className={styles.bonus}>
      <h2>
        <span>Бонусом </span>
        по вашему желанию
        <span> мы:</span>
      </h2>
      {cards.map((card: Card) => (
        <MainCard key={card.id} {...card} type="bonus" />
      ))}
    </div>
  );
};
