import HeaderContainer from "../../components/header-container";
import Contact from "../../section/contact";
import Footer from "../../section/footer";
import Header from "../../section/header";
import Mission from "../../section/mission";
import Preview from "../../section/preview";
import Values from "../../section/values";
import History from "../../section/history";
import Product from "../../section/product";
import Offer from "../../section/offer";

import styles from "./styles/light.module.scss";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderContainer>
        <Header />
        <Preview />
      </HeaderContainer>
      <Mission />
      <Values />
      <History />
      <Product />
      <div className={styles.mapWrapper}>
        <Offer />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
