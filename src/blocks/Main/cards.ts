import { Card } from "../../types";

import card1 from "../../assets/img/main_card_1.png";
import card2 from "../../assets/img/main_card_2.png";
import card3 from "../../assets/img/main_card_3.png";

const cards: Array<Card> = [
  {
    id: 0,
    title: "Вы находите помещение",
    text: "Направляете нам ссылку на  объявление, мы свяжемся с собственником и назначим встречу",
    src: card1,
    alt: "card",
  },
  {
    id: 1,
    title: "Мы выезжаем с вами как агенты",
    text: "Вместе с вами отправляемся к собственнику помещения в качестве агентов",
    src: card2,
    alt: "card",
  },
  {
    id: 2,
    title: "Оплата комисии",
    text: "Собственник платит нам комиссию, и мы делимся ею с вами на месте",
    src: card3,
    alt: "card",
  },
];

export default cards;