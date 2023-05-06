import React from "react";
import classnames from "classnames";
import Line1 from "../../img/line_1";
import Line2 from "../../img/line_2";

import card1 from "../../img/main_card_1.png";
import card2 from "../../img/main_card_2.png";
import card3 from "../../img/main_card_3.png";

import styles from "./headerCard.module.css";

type Card = {
  id: number;
  title: string;
  text: string;
  img: string;
  alt: string;
};

const cardItems: Array<Card> = [
  {
    id: 0,
    title: "Вы находите помещение",
    text: "Направляете нам ссылку на  объявление, мы свяжемся с собственником и назначим встречу",
    img: card1,
    alt: "card",
  },
  {
    id: 1,
    title: "Мы выезжаем с вами как агенты",
    text: "Вместе с вами отправляемся к собственнику помещения в качестве агентов",
    img: card2,
    alt: "card",
  },
  {
    id: 2,
    title: "Оплата комисии",
    text: "Собственник платит нам комиссию, и мы делимся ею с вами на месте",
    img: card3,
    alt: "card",
  },
];

export const HeaderCard = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-[20px] relative md:flex-row ">
        {cardItems.map((card: Card) => {
          const { id, title, text, img, alt } = card;
          return (
            <div
              key={id}
              className={classnames(
                styles.card,
                "px-5  py-[30px] flex flex-col items-center z-10 sm:pb-[60px] sm:w-full sm:min-h-[428px] md:min-h-[416px]"
              )}
            >
              <img
                src={img}
                className="mx-[5px] mb-[5px] sm:mb-[15px]"
                alt={alt}
              />
              <h3 className={classnames(styles.title, "mb-[5px] sm:mb-[15px]")}>
                {title}
              </h3>
              <p className={classnames(styles.text, "sm:max-w-[305px]")}>
                {text}
              </p>
            </div>
          );
        })}
        <Line1 className="absolute top-[-42px] left-[28px] z-0 sm:hidden" />
        <Line2 className="absolute top-[-42px] left-[107px] z-0" />
      </div>
    </div>
  );
};
