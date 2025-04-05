import { Slide, Zoom } from "react-awesome-reveal";
import Image from "~/common/assets/Images.webp";

import style from "./styles/index.module.scss";

export const Mission = () => {
  return (
    <div id={"О компании"} className={style.contacts}>
      <div className={style.contactsContainer}>
        <Zoom direction="up" duration={700} triggerOnce damping={0.2}>
          <img src={Image} className={style.image} />
        </Zoom>
        <div className={style.content}>
          <Slide direction="up" duration={400} triggerOnce>
            <div className={style.header}>
              <div>наша миссия и преимущества</div>
              <div>О нашей компании</div>
            </div>
            <div className={style.body}>
              <Slide direction="up" duration={400} triggerOnce>
                <div className={style.bodyBlock}>
                  <span>Наша компания </span>– это современное производственное
                  предприятие, специализирующееся на разработке, производстве и
                  продаже высококачественных ПВХ-материалов для мебели,
                  интерьеров, кухонь и образовательных учреждений.
                </div>
                <div className={style.bodyBlock}>
                  <span>Наша миссия </span>– создавать надежные и инновационные
                  решения, которые помогают нашим клиентам развивать успешный
                  бизнес. Мы верим, что высокое качество продукции и
                  профессиональный подход – основа долгосрочного доверия и
                  стабильного роста.
                </div>
              </Slide>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};
