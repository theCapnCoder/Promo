import React from "react";
import discount from "../../assets/img/discount.png";

import styles from "./discount.module.scss";
import Button from "../../components/Button";

export const Discount = () => {
  return (
    <div className={styles.discount}>
      <img src={discount} alt="discount" />
      <h2>
        <span>Получите скидку </span>
        до 50%
      </h2>
      <h3>
        Оставьте заявку сейчас и получите персональную скидку на первый месяц
        аренды или бесплатный переезд
      </h3>
      <Button large text="Оставить заявку" />
    </div>
  );
};
