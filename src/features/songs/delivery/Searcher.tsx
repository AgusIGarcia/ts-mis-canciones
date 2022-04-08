import { useState } from "react";
import { SongDto } from "../dtos/SongDto";
import TextFieldMui from "../../../core/delivery/mui-components/TextFieldMui";
import styles from "./Searcher.module.css";
import { useTranslation } from "react-i18next";
import IconButtonMui from "../../../core/delivery/mui-components/IconButtonMui";
import FormDefault from "../../../core/delivery/default-components/FormDefault";
import { MyContainer } from "../../../core/dependency-injection/Container";
import { SearchSong } from "../application/SearchSong";
import { defaultSong } from "../dtos/default/DefaultSong";
import { useNavigate } from "react-router-dom";

const Searcher = () => {
  const { t } = useTranslation(["songs"]);
  const [song, setSong] = useState(defaultSong);
  let navigate = useNavigate();

  const changeArtistHandler = (artistName: string) => {
    setSong({ ...song, artist: { ...song.artist, name: artistName } });
  };

  const changeSongHandler = (songName: string) => {
    setSong({ ...song, name: songName });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let songToSearch = songPrettier();
    navigate(
      `/search?artist=${songToSearch.artist.name}&song=${songToSearch.name}`
    );
  };

  const handleReset = (event: React.FormEvent) => {
    setSong(defaultSong);
    navigate("/");
  };

  const songPrettier = () => {
    let capitalizeFirstLetterOfEachWord = (s: string) => {
      let artistNameArray = s.split(" ");

      for (let i = 0; i < artistNameArray.length; i++) {
        artistNameArray[i] =
          artistNameArray[i].charAt(0).toUpperCase() +
          artistNameArray[i].slice(1).toLowerCase();
      }

      return artistNameArray.join(" ");
    };

    let capitalizeFirstLetter = (s: string) => {
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    };

    let artistNamePrettier = capitalizeFirstLetterOfEachWord(song.artist.name);
    let songtNamePrettier = capitalizeFirstLetter(song.name);

    let returnedSong: SongDto = {
      ...song,
      name: songtNamePrettier,
      artist: { ...song.artist, name: artistNamePrettier },
    };
    return returnedSong;
  };

  return (
    <FormDefault
      className={styles.Form}
      autoComplete="on"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <IconButtonMui
        icon="home"
        type="reset"
        className={styles.ImageButton}
        iconClassName={styles.Icon}
      />
      <TextFieldMui
        className={styles.TextField}
        label={t("songs:artist")}
        value={song.artist.name}
        onChange={changeArtistHandler}
        required={true}
        validationErrorMessage={t("songs:artistNoEmptyMessage")}
      />
      <TextFieldMui
        className={styles.TextField}
        label={t("songs:songName")}
        value={song.name}
        onChange={changeSongHandler}
        required={true}
        validationErrorMessage={t("songs:songNoEmptyMessage")}
      />
      <IconButtonMui
        icon="search"
        type="submit"
        className={styles.ImageButton}
        iconClassName={styles.Icon}
      />
    </FormDefault>
  );
};

export default Searcher;
