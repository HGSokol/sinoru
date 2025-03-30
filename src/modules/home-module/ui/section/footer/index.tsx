import Logo from "~/common/icons/logo";
import ArrowUp from "~/common/icons/arrow-up";
import { linkSocial } from "../header";

import style from "./styles/light.module.scss";

const Footer = () => {
  const handleUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.footer}>
      <div id="Footer" className={style.footerContainer}>
        <div className={style.info}>
          <div className={style.logo}>
            <Logo />
            <div className={style.links}>
              {linkSocial.map((e, i) => {
                return (
                  <a
                    className={style.linkWrapper}
                    key={i}
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={style.infoBlockContainer}>
            <div className={style.infoBlock}>
              <div>Меню</div>
              <div>
                <a href="#Header">О компании</a>
                <a href="#Benefits">История бренда</a>
                <a href="#Products">Продукция</a>
                <a href="#Steps">Сотрудничество</a>
                <a href="#Contacts">Контаты</a>
              </div>
            </div>
            <div className={style.infoBlock}>
              <div>Контакты</div>
              <div>
                <a href="malito:Sinoru.ru@gmail.com">Sinoru.ru@gmail.com</a>
                <a href="tel:+79458346468">+7 (945) 834 64 68</a>
              </div>
            </div>
            <div className={style.infoBlock}>
              <div>Адрес</div>
              <div>
                <div>ул. Московская, 294</div>
                <div>Москва, Россия</div>
                <div>УНП 200003248</div>
              </div>
            </div>
            <div className={style.linksWrapper}>
              {linkSocial.map((e, i) => {
                return (
                  <a
                    className={style.linkWrapper}
                    key={i}
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.icon}
                  </a>
                );
              })}
            </div>
            <div className={style.iconUpWrapper} onClick={handleUp}>
              <ArrowUp />
            </div>
          </div>
        </div>
        <div className={style.links}>
          <div>© 2025</div>
          <div>Политика конфидициальности</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
