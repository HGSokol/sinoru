import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import BurgerMenu from "~/common/icons/burger";
import Logo from "~/common/icons/logo";
import Cross from "~/common/icons/cross";
import Instagram from "~/common/icons/instagram";
import Whatsup from "~/common/icons/whatsup";
import Telegram from "~/common/icons/telegram";

import style from "./styles/light.module.scss";

const linkList = [
  "О компании",
  "История бренда",
  "Продукция",
  "Сотрудничество",
  "Контакты",
];

export const linkSocial = [
  { icon: <Instagram />, link: "https://www.instagram.com/" },
  { icon: <Whatsup />, link: "https://www.whatsapp.com/?lang=ru_RU" },
  { icon: <Telegram />, link: "https://web.telegram.org/a/" },
];

type HeaderProps = {
  alt?: boolean;
};

const Header = ({ alt }: HeaderProps) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <div className={`${style.header} ${alt && style.headerAlt}`}>
      <div className={style.sectionContainer}>
        <Link to={"/"} className={style.leftSide}>
          <Logo width={38} />
        </Link>
        <ul className={style.rightSide}>
          {linkList.map((e, i) => {
            return (
              <li key={`${e}-${i}`} onClick={() => navigate("/")}>
                <a href={`#${e}`}>{e}</a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className={style.burgerMenu}
        >
          {menu ? <Cross /> : <BurgerMenu />}
        </div>
        {menu && (
          <div
            onClick={(e) =>
              e.target === e.currentTarget && setMenu((prev) => !prev)
            }
            className={style.burgerMenuContainer}
          >
            <div className={style.burgerBody}>
              <div className={style.headerMenu}>
                <Logo width={63} />
                <Cross
                  color={"#ffffff"}
                  onClick={() => setMenu((prev) => !prev)}
                />
              </div>
              <div className={style.bodyMenu}>
                <ul className={style.navigation}>
                  {linkList.map((e, i) => {
                    return (
                      <li key={i} onClick={() => navigate("/")}>
                        <a href={`#${e}`}>{e}</a>
                      </li>
                    );
                  })}
                </ul>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
