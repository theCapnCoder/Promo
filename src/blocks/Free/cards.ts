import card1 from "../../assets/img/free_card_1.png";
import card2 from "../../assets/img/free_card_2.png";
import card3 from "../../assets/img/free_card_3.png";
import card4 from "../../assets/img/free_card_4.png";
import { Card } from "../../types";

const cards: Array<Card> = [
  {
    id: 0,
    title: "157000 рублей",
    text: "максимальная сумма, которую мы заплатили клиентам",
    src: card1,
    alt: "card",
  },
  {
    id: 1,
    title: "3 дня",
    text: "в среднем длится поиск офиса с использованием базы собственников",
    src: card2,
    alt: "card",
  },
  {
    id: 2,
    title: "9000 руб/мес",
    text: "в среднем экономим клиентам на аренде помещений",
    src: card3,
    alt: "card",
  },
  {
    id: 3,
    title: "87%",
    text: "собственников платят нам комиссию, а мы делимся ею с вами",
    src: card4,
    alt: "card",
  },
];

export default cards;