import ProductCard from "../../components/product-card";

import Image1 from "~/common/assets/back1.webp";
import Image2 from "~/common/assets/back2.webp";
import Image3 from "~/common/assets/back3.webp";
import Image4 from "~/common/assets/back4.webp";

import styles from "./styles/light.module.scss";
import { Slide, Zoom } from "react-awesome-reveal";

const data = [
  {
    image: Image1,
    title: "Кромка из ПВХ",
    descsription:
      "Гибкая, устойчивая к влаге и механическим повреждениям, легко клеится.",
  },
  {
    image: Image2,
    title: "Кромка из АБС",
    descsription:
      "Экологичный и долговечный материал. Безопасен, устойчив к механическим повреждениям.",
  },
  {
    image: Image3,
    title: "Акриловая кромка",
    descsription:
      "Создает 3D-эффект, устойчива к царапинам, придает мебели стильный вид.",
  },
  {
    image: Image4,
    title: "Специальный подбор",
    descsription:
      "Подбираются индивидуально по цвету, толщине и фактуре для точного соответствия дизайну.",
  },
];

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <Slide direction="up" duration={400} triggerOnce>
          <div className={styles.title}>
            <div>широкий ассортимент</div>
            <div>Наша продукция</div>
          </div>
          <div className={styles.content}>
            <div>
              У нас вы найдете широкий выбор мебельной кромки на любой вкус.
              Разнообразие цветов, текстур и материалов позволит идеально
              подобрать кромку для любых дизайнерских решений.
            </div>
            <div>
              Качественные ПВХ, АБС и акриловые кромки помогут создать стильную
              и долговечную мебель. Мы поможем вам найти идеальное сочетание
              качества, стиля и практичности!
            </div>
          </div>
        </Slide>
      </div>
      <Zoom duration={700} triggerOnce>
        <div className={styles.cardsWrapper}>
          {data.map((e) => (
            <ProductCard
              key={e.title}
              title={e.title}
              image={e.image}
              description={e.descsription}
            />
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Product;
