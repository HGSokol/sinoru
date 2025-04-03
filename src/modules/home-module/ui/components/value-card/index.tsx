import Button from "~/modules/home-module/ui/components/button";

import style from "./styles/light.module.scss";
import { ReactNode } from "react";

type ValueCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  trigger: () => void;
};

const ValueCard = ({ icon, title, description, trigger }: ValueCardProps) => {
  return (
    <div className={style.card}>
      <div>
        <div className={style.icon}>{icon}</div>
        <div className={style.contentWrapper}>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
      <div className={style.buttonWrapper}>
        <Button
          onClick={trigger}
          width="100"
          variant="alternative"
          text="Оставить заявку"
        />
      </div>
    </div>
  );
};

export default ValueCard;
