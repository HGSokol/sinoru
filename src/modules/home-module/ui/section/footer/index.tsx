import { Link } from "react-router-dom";
import { linkSocial } from "~/modules/home-module/ui/section";
import { Logo, ArrowUp } from "~/common/icons";

import style from "./styles/index.module.scss";

export const Footer = () => {
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
                <a href="#О компании">О компании</a>
                <a href="#История бренда">История бренда</a>
                <a href="#Продукция">Продукция</a>
                <a href="#Сотрудничество">Сотрудничество</a>
                <a href="#Контаты">Контаты</a>
              </div>
            </div>
            <div className={style.infoBlock}>
              <div>Контакты</div>
              <div>
                <Link to="mailto:sinoru.ru@gmail.com">Sinoru.ru@gmail.com</Link>
                <Link to="tel:+79458346468">+7 (945) 834 64 68</Link>
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
                  <Link
                    className={style.linkWrapper}
                    key={i}
                    to={e.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.icon}
                  </Link>
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
          <Link to={"/privacy"}>Политика конфидициальности</Link>
        </div>
      </div>
    </div>
  );
};
