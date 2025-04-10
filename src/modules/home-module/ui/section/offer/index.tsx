import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Button, Form } from "~/modules/home-module/ui/components";
import { useForm } from "~/modules/home-module/ui/hooks";
import Image1 from "~/common/assets/back1.webp";
import Image2 from "~/common/assets/back2.webp";
import Image3 from "~/common/assets/back3.webp";

import styles from "./styles/index.module.scss";

const data = [
  {
    image: Image1,
    title: "ДИСТРИБЬЮЦИЯ",
    descsription:
      "Предлагаем долгосрочное партнерство с выгодными условиями, стабильными поставками и возможностью эксклюзивной реализации нашей продукции в вашем регионе.",
  },
  {
    image: Image2,
    title: "Заказ",
    descsription:
      "Удобный вариант для разовых или регулярных закупок мебельной кромки по оптовым ценам, позволяющий гибко управлять ассортиментом.",
  },
  {
    image: Image3,
    title: "Акриловая кромка",
    descsription:
      "Изготовление кромки по индивидуальным параметрам, включая выбор цвета, толщины, текстуры и других характеристик, для точного соответствия вашим требованиям.",
  },
];

export const Offer = () => {
  const { contactForm, handleToggleModal } = useForm();
  const [openSlide, setOpenSlide] = useState(0);

  return (
    <div id={"Сотрудничество"} className={styles.offer}>
      <div className={styles.offerContainer}>
        <Slide direction="up" duration={400} triggerOnce>
          <div className={styles.title}>
            <div>формы сотрудничества</div>
            <div>
              Мы предлагаем разные форматы сотрудничества — выберите тот,
              который подходит именно вам.
            </div>
            <Button
              onClick={handleToggleModal}
              variant="default"
              text="Оставить заявку"
            />
          </div>
        </Slide>
        <Slide direction="up" duration={400} triggerOnce>
          <div className={styles.cardsWrapper}>
            {data.map((e, i) => (
              <div
                key={e.title}
                className={styles.card}
                onClick={() => setOpenSlide(i)}
              >
                <div>{e.title}</div>
                <div>{e.descsription}</div>
                <div
                  style={{
                    backgroundImage: `url(${e.image})`,
                    display: `${openSlide === i ? "block" : "none"}`,
                  }}
                ></div>
              </div>
            ))}
            <div className={styles.buttonWrapper}>
              <Button
                width="100"
                onClick={handleToggleModal}
                variant="default"
                text="Оставить заявку"
              />
            </div>
          </div>
        </Slide>
      </div>
      {contactForm && <Form alt isSubmit={handleToggleModal} />}
    </div>
  );
};
