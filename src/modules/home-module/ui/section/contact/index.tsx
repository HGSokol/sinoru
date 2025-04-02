import Geo from "~/common/icons/geo";
import Mail from "~/common/icons/mail";
import Phone from "~/common/icons/phone";
import Form from "../../components/form";

import styles from "./styles/light.module.scss";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="Контакты" className={styles.contacts}>
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
                <Link
                  to="https://yandex.by/maps/213/moscow/geo/moskovskaya_ulitsa/10050978/?ll=37.416188%2C55.671232&z=17.07"
                  target="_blank"
                >
                  ул. Московская, 294, Москва, Россия
                </Link>
              </div>
              <div className={styles.infoRow}>
                <div>
                  <Mail />
                </div>
                <Link to="mailto:sinoru.ru@gmail.com">Sinoru.ru@gmail.com</Link>
              </div>
              <div className={styles.infoRow}>
                <div>
                  <Phone />
                </div>
                <Link to="tel:+79458346468">+7 (945) 834 64 68</Link>
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
