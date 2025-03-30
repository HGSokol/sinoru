import { Slide } from "react-awesome-reveal";
import styles from "./styles/light.module.scss";

const data = [
  {
    title: "2017",
    description:
      "Год основания компании, когда мы поставили перед собой цель создать продукцию высокого качества, доступную для широкого круга клиентов. С самого начала мы ориентировались на инновации и качество, которые стали основой нашего бренда.",
  },
  {
    title: "2018 - 2020",
    description:
      "Эти годы стали временем активного роста. Мы расширили производственные мощности, оптимизировали процессы и запустили новые виды кромки. В этот период мы начали налаживать отношения с первыми партнерами и клиентами на рынке.",
  },
  {
    title: "2021 - 2024",
    description:
      "Компания значительно расширила свою партнерскую сеть, количество клиентов увеличилось в несколько раз. Мы начали работать с крупными дистрибьюторами и поставщиками, расширили ассортимент продукции, а также внедрили новые технологии.",
  },
  {
    title: "2018 - 2020",
    description:
      "Мы настроены на дальнейшее развитие. В ближайшие годы планируем расширить ассортимент кромок, внедрять новые материалы и дизайны, а также активно работать над выходом на международные рынки. Наша цель – обеспечить клиентов по всему миру продукцией самого высокого качества.",
  },
];

const History = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <Slide
          direction="up"
          duration={400}
          triggerOnce
          className={styles.title}
        >
          <div className={styles.title}>
            <div>как все начиналось</div>
            <div>История нашего бренда</div>
          </div>
        </Slide>
        <Slide direction="up" duration={700} triggerOnce>
          <div className={styles.cardsWrapper}>
            {data.map((e) => (
              <div key={e.title} className={styles.cardWrapper}>
                <div>{e.title}</div>
                <div>{e.description}</div>
              </div>
            ))}
          </div>
        </Slide>
        <div className={styles.photoWrapper}>
          <div className={styles.photo1}></div>
          <div className={styles.photo2}></div>
          <div className={styles.photo3}></div>
          <div className={styles.photo4}></div>
        </div>
      </div>
    </div>
  );
};

export default History;
