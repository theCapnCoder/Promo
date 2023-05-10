import React from "react";
import offer1 from "../../assets/img/offer_1.png";
import offer2 from "../../assets/img/offer_2.png";

import styles from "./offer.module.scss";
import { Card } from "../../types";
import MainCard from "../../components/MainCard";

const cards: Array<Card> = [
  {
    id: 0,
    title: "Владельцев бизнеса",
    text: "Ищете помещение и хотите сэкономить средства компании – мы поможем вам в этом: выберем вместе с вами наилучший вариант, договоримся по условиям с собственником и вернем вам половину нашей комиссии.",
    src: offer1,
    alt: "card",
  },
  {
    id: 1,
    title: "Сотрудников компании",
    text: "Если вы занимаетесь поиском нового помещения для вашей компании, мы поможем вам выбрать наилучший вариант, который устроит вашего руководителя, а также выплатим вам напрямую половину нашей комиссии.",
    src: offer2,
    alt: "card",
  },
];

export const Offer = () => {
  return (
    <div className={styles.offer}>
      <h2>
        Наше
        <span> предложение </span>
        актуально<span> для:</span>
      </h2>
      <div className={styles.cards}>
        {cards.map((card: Card) => (
          <MainCard key={card.id} {...card} type="offer" />
        ))}
      </div>
    </div>
  );
};
