import Slider from "../slider";
import light from "./styles/light.module.scss";

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <div className={light.headerWrapper}>
      <Slider />
      <div className={light.innerComponents}>{children}</div>
    </div>
  );
};

export default HeaderContainer;
