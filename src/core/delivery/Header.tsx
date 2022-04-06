import styles from "./Header.module.css";
import logo from "../../logo.svg";
import { useTranslation } from "react-i18next";
import ImageDefault from "./default-components/ImageDefault";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation(["global"]);
  return (
    <header className={styles.AppHeader}>
      <div></div>
      <div className={styles.DivTitle}>
        <ImageDefault src={logo} className={styles.AppLogo} alt="logo" />
        <p>{t("global:title")}</p>
        <ImageDefault src={logo} className={styles.AppLogo} alt="logo" />
      </div>
      <div className={styles.DivLanguageSelector}>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
