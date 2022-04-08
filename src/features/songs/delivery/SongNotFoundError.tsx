import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AlertMui from "../../../core/delivery/mui-components/AlertMui";
import IconTextButtonMui from "../../../core/delivery/mui-components/IconTextButtonMui";
import { Id } from "../../../core/types/Id";
import styles from "./SongNotFoundError.module.css";

interface Props {
  id: Id;
}

const SongNotFoundError = (props: Props) => {
  const { t } = useTranslation(["songs","global"]);
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
        <h2 className={styles.Subtitle}>
          {t("songs:songNotFoundErrorSubtitle")}
        </h2>
        <p>
          {t("songs:songNotFoundErrorText0")} <b>{props.id}</b>{" "}
          {t("songs:songNotFoundErrorText1")}
        </p>
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

export default SongNotFoundError;
