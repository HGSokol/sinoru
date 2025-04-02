import { Slide, Zoom } from "react-awesome-reveal";
import Image from "~/common/assets/Images.webp";

import styles from "./styles/light.module.scss";

const Mission = () => {
  return (
    <div id={"О компании"} className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <Zoom direction="up" duration={700} triggerOnce damping={0.2}>
          <img src={Image} className={styles.image} />
        </Zoom>
        <div className={styles.content}>
          <Slide direction="up" duration={400} triggerOnce>
            <div className={styles.header}>
              <div>наша миссия и преимущества</div>
              <div>О нашей компании</div>
            </div>
            <div className={styles.body}>
              <Slide direction="up" duration={400} triggerOnce>
                <div className={styles.bodyBlock}>
                  <span>Наша компания </span>– это современное производственное
                  предприятие, специализирующееся на разработке, производстве и
                  продаже высококачественных ПВХ-материалов для мебели,
                  интерьеров, кухонь и образовательных учреждений.
                </div>
                <div className={styles.bodyBlock}>
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

export default Mission;
