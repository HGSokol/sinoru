import { HeaderContainer } from "~/modules/home-module/ui/components";
import {
  Contact,
  Footer,
  Header,
  Mission,
  Preview,
  Values,
  History,
  Product,
  Offer,
} from "~/modules/home-module/ui/section";

import style from "./styles/index.module.scss";

const HomePage = () => {
  return (
    <div className={style.pageWrapper}>
      <HeaderContainer>
        <Header />
        <Preview />
      </HeaderContainer>
      <Mission />
      <Values />
      <History />
      <Product />
      <div className={style.mapWrapper}>
        <Offer />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
