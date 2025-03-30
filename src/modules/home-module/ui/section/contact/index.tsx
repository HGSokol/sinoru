import Geo from "~/common/icons/geo";
import Mail from "~/common/icons/mail";
import Phone from "~/common/icons/phone";
import Form from "../../components/form";

import styles from "./styles/light.module.scss";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="Contacts" className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.info}>
          <Slide direction="up" duration={400} triggerOnce>
            <div className={styles.infoTitle}>
              <span>наши контакты</span>
              <span>Свяжитесь с нами!</span>
              <span>
                Если у вас возникли вопросы, мы всегда готовы помочь! Оставьте
                заявку, и наши специалисты свяжутся с вами в ближайшее время.
              </span>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoRow}>
                <div>
                  <Geo />
                </div>
                <span>ул. Московская, 294, Москва, Россия</span>
              </div>
              <div className={styles.infoRow}>
                <div>
                  <Mail />
                </div>
                <span>Sinoru.ru@gmail.com</span>
              </div>
              <div className={styles.infoRow}>
                <div>
                  <Phone />
                </div>
                <span>+7 (945) 834 64 68</span>
              </div>
            </div>
          </Slide>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
