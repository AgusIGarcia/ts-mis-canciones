import { useTranslation } from "react-i18next";
import AlertMui from "../../../core/delivery/mui-components/AlertMui";
import styles from "./SearchError.module.css";

interface Props {
  artistName:string;
  songName:string;
}

const SearchError = (props:Props) => {
  const { t } = useTranslation(["songs","global"]);
  return (
    <AlertMui
      className={styles.Alert}
      titleClassName={styles.AlertTitle}
      severity="error"
      title={t("global:ErrorTitle")}
    >
      <h2 className={styles.Subtitle}>{t("songs:songErrorSubtitle")}</h2>
      <p>{t("songs:songErrorText0")} <b>{props.artistName}</b> {t("songs:songErrorText1")} <b>{props.songName}</b> {t("songs:songErrorText2")}</p>
      <p>{t("songs:songErrorText3")}</p>
    </AlertMui>
  );
};

export default SearchError;
