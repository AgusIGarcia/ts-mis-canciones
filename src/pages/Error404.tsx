import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AlertMui from "../core/delivery/mui-components/AlertMui";
import IconTextButtonMui from "../core/delivery/mui-components/IconTextButtonMui";
import styles from "./Error404.module.css";

const Error404 = () => {
  const { t } = useTranslation(["songs", "global"]);
  let navigate = useNavigate();

  const homeButtonHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.MainDiv}>
      <AlertMui
        className={styles.Alert}
        titleClassName={styles.AlertTitle}
        severity="error"
        title={t("global:ErrorTitle")}
      >
        <h2 className={styles.Subtitle}>{t("global:404ErrorSubtitle")}</h2>
        <p>{t("global:404ErrorText0")}</p>
      </AlertMui>
      <div className={styles.ButtonContainer}>
        <IconTextButtonMui
          className={styles.HomeButton}
          icon="home"
          buttonText={t("global:home")}
          iconClassName={styles.ButtonIcon}
          onClick={homeButtonHandler}
        />
      </div>
    </div>
  );
};

export default Error404;
