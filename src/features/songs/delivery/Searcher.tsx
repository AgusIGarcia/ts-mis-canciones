import { useState } from "react";
import { ArtistDto } from "../dtos/ArtistDto";
import { SongDto } from "../dtos/SongDto";
import TextFieldMui from "../../../core/delivery/mui-components/TextFieldMui";
import styles from "./Searcher.module.css";
import { useTranslation } from "react-i18next";
import IconButtonMui from "../../../core/delivery/mui-components/IconButtonMui";
import FormDefault from "../../../core/delivery/default-components/FormDefault";
import { MyContainer } from "../../../core/dependency-injection/Container";
import { SearchSong } from "../application/SearchSong";

interface Props {
  setSearchedSong: React.Dispatch<React.SetStateAction<SongDto>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultArtist: ArtistDto = {
  name: "",
  img: "",
};

const defaultSong: SongDto = {
  name: "",
  artist: defaultArtist,
  lyrics: "",
};

const Searcher = (props: Props) => {
  const { t } = useTranslation(["songs"]);
  const [song, setSong] = useState(defaultSong);
  let searchSongs = MyContainer.resolve(SearchSong);

  const changeArtistHandler = (artistName: string) => {
    setSong({ ...song, artist: { ...song.artist, name: artistName } });
  };

  const changeSongHandler = (songName: string) => {
    setSong({ ...song, name: songName });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let songPret = beforeSearch();
    try {
      props.setSearchedSong(
        await searchSongs.execute(songPret.artist.name, songPret.name)
      );
    } catch (error) {
      props.setError(true);
    } finally {
      props.setSearching(false);
    }
  };

  const beforeSearch = () => {
    props.setSearching(true);
    props.setError(false);
    props.setSearchedSong(defaultSong);
    let songPret = songPrettier();
    props.setSearchedSong(songPret);
    return songPret;
  };

  const handleReset = (event: React.FormEvent) => {
    setSong(defaultSong);
    props.setSearchedSong(defaultSong);
    props.setError(false);
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
