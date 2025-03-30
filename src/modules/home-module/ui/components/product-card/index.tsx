import Button from "~/modules/home-module/ui/components/button";

import style from "./styles/light.module.scss";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
};

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <div className={style.card}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={style.contentWrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
      <div className={style.buttonWrapper}>
        <Button width="100%" variant="default" text="Оставить заявку" />
      </div>
    </div>
  );
};

export default ProductCard;
