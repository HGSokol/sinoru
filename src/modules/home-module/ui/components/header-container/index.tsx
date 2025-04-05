import { Slider } from "~/modules/home-module/ui/components";

import style from "./styles/index.module.scss";

export type HeaderContainerProps = {
  children: React.ReactNode;
};

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <div className={style.headerWrapper}>
      <Slider />
      <div className={style.innerComponents}>{children}</div>
    </div>
  );
};
