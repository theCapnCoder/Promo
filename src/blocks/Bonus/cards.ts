import card1 from '../../assets/img/bonus_card_1.png'
import card2 from '../../assets/img/bonus_card_2.png'
import card3 from '../../assets/img/bonus_card_3.png'
import card4 from '../../assets/img/bonus_card_4.png'

import { Card } from '../../types';

const cards: Array<Card> = [
  {
    id: 0,
    title: "Составим компанию",
    text: "Составим компанию на просмотре и обратим внимание на нюансы, которые без опыта очень сложно заметить.",
    src: card1,
    alt: "card",
  },
  {
    id: 1,
    title: "Проверим договор",
    text: "Проверим договор аренды и юридический статус самого задания.",
    src: card2,
    alt: "card",
  },
  {
    id: 2,
    title: "Грамотно поторгуемся",
    text: "Грамотно поторгуемся и вы сможет сэкономить свои деньги.",
    src: card3,
    alt: "card",
  },
  {
    id: 3,
    title: "Придадим спокойствия",
    text: "Придадим спокойствия и уверенности в успешном решении вопроса.",
    src: card4,
    alt: "card",
  },
];

export default cards;