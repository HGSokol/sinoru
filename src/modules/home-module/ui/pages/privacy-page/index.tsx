import Footer from "../../section/footer";
import Header from "../../section/header";
import PrivacyContent from "../../section/privacy-content";

import style from "./styles/light.module.scss";

const PrivacyPage = () => {
  return (
    <div className={style.privacyWrapper}>
      <Header alt />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
