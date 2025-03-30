import { useCallback, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../components/button";
import { linkSocial } from "../header";
import Form from "../../components/form";

import style from "./styles/light.module.scss";

const Preview = () => {
  const [contactForm, setContactForm] = useState(false);

  const handleCloseModal = useCallback(() => {
    setContactForm((prev) => !prev);
  }, [setContactForm]);

  return (
    <div className={style.previewWrapper}>
      <Fade duration={500} triggerOnce className={style.fadeWrapper}>
        <div className={style.previewContent}>
          <div className={style.title}>
            {`Реальные истории - проверенные партнёры! Мы выбираем опыт,\nа не легенды`}
          </div>
          <div className={style.description}>
            Мы стремимся к совершенству в каждом аспекте работы – от технологий
            производства до взаимодействия с клиентами и партнерами.
          </div>
          <Button
            onClick={() => setContactForm((prev) => !prev)}
            text="Отправить заявку"
          />
        </div>
        <div className={style.linksWrapper}>
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
        {contactForm && <Form alt isSubmit={handleCloseModal} />}
      </Fade>
    </div>
  );
};

export default Preview;
