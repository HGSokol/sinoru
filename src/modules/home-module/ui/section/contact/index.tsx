import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Form } from "~/modules/home-module/ui/components";
import { Geo, Mail, Phone } from "~/common/icons";

import style from "./styles/index.module.scss";

export const Contact = () => {
  return (
    <div id="Контакты" className={style.contacts}>
      <div className={style.contactsContainer}>
        <div className={style.info}>
          <Slide direction="up" duration={400} triggerOnce>
            <div className={style.infoTitle}>
              <span>наши контакты</span>
              <span>Свяжитесь с нами!</span>
              <span>
                Если у вас возникли вопросы, мы всегда готовы помочь! Оставьте
                заявку, и наши специалисты свяжутся с вами в ближайшее время.
              </span>
            </div>
            <div className={style.infoBlock}>
              <div className={style.infoRow}>
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
              <div className={style.infoRow}>
                <div>
                  <Mail />
                </div>
                <Link to="mailto:sinoru.ru@gmail.com">Sinoru.ru@gmail.com</Link>
              </div>
              <div className={style.infoRow}>
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
