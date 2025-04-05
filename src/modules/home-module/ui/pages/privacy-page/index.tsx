import { useLayoutEffect } from "react";
import {
  Footer,
  Header,
  PrivacyContent,
} from "~/modules/home-module/ui/section";

import style from "./styles/index.module.scss";

const PrivacyPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.privacyWrapper}>
      <Header alt />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
