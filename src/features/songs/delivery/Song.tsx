import { useState } from "react";
import { useTranslation } from "react-i18next";
import CardMui from "../../../core/delivery/mui-components/CardMui";
import IconTextButtonMui from "../../../core/delivery/mui-components/IconTextButtonMui";
import LoaderMui from "../../../core/delivery/mui-components/LoaderMui";
import SnackbarMui from "../../../core/delivery/mui-components/SnackbarMui";
import { MyContainer } from "../../../core/dependency-injection/Container";
import { SaveSong, saveSongErrorKeys } from "../application/SaveSong";
import { SongDto } from "../dtos/SongDto";
import styles from "./Song.module.css";

interface Props {
  song: SongDto;
  searchedSong: boolean;
}

const LOADER_SIZE = "10vw";

const Song = (props: Props) => {
  let saveSong = MyContainer.resolve(SaveSong);
  const { t } = useTranslation(["songs"]);
  const [successfulSaveNotification, setSuccessfulSaveNotification] =
    useState(false);
  const [failSaveNotification, setFailSaveNotification] = useState(false);
  const [saveErrorMessage, setSaveErrorMessage] = useState<string>();

  const errorMessageSetter = (errorKey: string): string => {
    let errorKeys = saveSongErrorKeys;
    switch (errorKey) {
      case errorKeys[0]:
        return t("songs:saveSongError0");
      default:
        return t("songs:saveSongErrorDefault");
    }
  };

  const homeButtonHandler = () => {
  }

  const saveButtonHandler = async () => {
    try {
      await saveSong.execute(props.song);
      setSuccessfulSaveNotification(true);
    } catch (error) {
      setSaveErrorMessage(errorMessageSetter((error as Error).message));
      setFailSaveNotification(true);
    }
  };

  const snackbars = () => {
    return (
      <>
        <SnackbarMui
          open={successfulSaveNotification}
          setOpen={setSuccessfulSaveNotification}
          severity="success"
          message={t("songs:songSavedSuccessfully")}
          vertical="top"
          horizontal="right"
        />
        <SnackbarMui
          open={failSaveNotification}
          setOpen={setFailSaveNotification}
          severity="error"
          message={saveErrorMessage}
          vertical="top"
          horizontal="right"
        />
      </>
    );
  };

  return (
    <>
      <CardMui
        className={styles.Card}
        imgClassName={styles.CardImg}
        actionsClassName={styles.CardActions}
        imgSrc={props.song.artist.img}
        loader={<LoaderMui className={styles.CardImg} size={LOADER_SIZE} />}
      >
        <div id="Content">
          <h1 className={styles.Title}>
            {props.song.artist.name} - {props.song.name}
          </h1>
          <p className={styles.Lyrics}>{props.song.lyrics}</p>
        </div>
        <div id="Actions">
          <div className={styles.ButtonContainer}>
            <IconTextButtonMui
              className={styles.HomeButton}
              icon="home"
              buttonText={t("songs:home")}
              iconClassName={styles.ButtonIcon}
              onClick={homeButtonHandler}
            />
            {props.searchedSong ? (
              <IconTextButtonMui
                className={styles.AddButton}
                icon="addCircle"
                buttonText={t("songs:addSongButton")}
                iconClassName={styles.ButtonIcon}
                onClick={saveButtonHandler}
              />
            ) : null}
          </div>
        </div>
      </CardMui>
      {snackbars()}
    </>
  );
};

export default Song;
