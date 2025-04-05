import { Slide } from "react-awesome-reveal";
import { ValueCard, Form } from "~/modules/home-module/ui/components";
import { useForm } from "~/modules/home-module/ui/hooks";
import { Schedule, Loudspeaker, Lamp, Вriefcase } from "~/common/icons";

import style from "./styles/index.module.scss";

const data = [
  {
    icon: <Schedule />,
    title: "Профессионализм и компетентность",
    descsription:
      "Наши специалисты обладают глубокими знаниями и опытом, что позволяет нам обеспечивать высокий уровень продукции и сервиса.",
  },
  {
    icon: <Loudspeaker />,
    title: "Надежность и деловая порядочность",
    descsription:
      "Мы строим бизнес на честности, прозрачности и выполнении обязательств перед клиентами и партнерами. ",
  },
  {
    icon: <Вriefcase />,
    title: "Взаимная выгода и партнерство",
    descsription:
      "Мы ценим долгосрочные отношения и работаем на благо наших клиентов, обеспечивая им надежную поддержку и качественный продукт.",
  },
  {
    icon: <Lamp />,
    title: "Cтремление к развитию и новаторство",
    descsription:
      "Мы следим за технологическими трендами, внедряем новые решения и постоянно улучшаем процессы.",
  },
];

export const Values = () => {
  const { contactForm, handleToggleModal } = useForm();

  return (
    <div className={style.contacts}>
      <div className={style.contactsContainer}>
        <div className={style.title}>
          <Slide direction="up" duration={400} triggerOnce>
            <div>
              <div>Основы корпоративной культуры</div>
              <div>Какие наши ценности?</div>
            </div>
            <div>
              Мы стремимся к долгосрочному сотрудничеству, предлагая лучшие
              решения для вашего бизнеса.
            </div>
          </Slide>
        </div>
        <div className={style.cardsWrapper}>
          {data.map((e) => (
            <ValueCard
              key={e.title}
              title={e.title}
              icon={e.icon}
              description={e.descsription}
              trigger={handleToggleModal}
            />
          ))}
        </div>
      </div>
      {contactForm && <Form alt isSubmit={handleToggleModal} />}
    </div>
  );
};
