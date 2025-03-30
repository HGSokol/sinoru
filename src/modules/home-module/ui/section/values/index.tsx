import Schedule from "~/common/icons/schedule";
import Loudspeaker from "~/common/icons/loudspeaker";
import Lamp from "~/common/icons/lamp";
import Вriefcase from "~/common/icons/briefcase";
import ValueCard from "../../components/value-card";

import styles from "./styles/light.module.scss";
import { Slide, Zoom } from "react-awesome-reveal";

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

const Values = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.title}>
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
        <div className={styles.cardsWrapper}>
          <Zoom duration={700} triggerOnce>
            {data.map((e) => (
              <ValueCard
                key={e.title}
                title={e.title}
                icon={e.icon}
                description={e.descsription}
              />
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Values;
