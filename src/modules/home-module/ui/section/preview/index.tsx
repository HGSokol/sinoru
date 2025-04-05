import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { linkSocial } from "~/modules/home-module/ui/section";
import { Button, Form } from "~/modules/home-module/ui/components";
import { useForm } from "~/modules/home-module/ui/hooks";

import style from "./styles/index.module.scss";

export const Preview = () => {
  const { contactForm, handleToggleModal } = useForm();

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
          <Button onClick={handleToggleModal} text="Отправить заявку" />
        </div>
        <div className={style.linksWrapper}>
          <div className={style.links}>
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
        </div>
      </Fade>
      {contactForm && <Form alt isSubmit={handleToggleModal} />}
    </div>
  );
};

export default Preview;
