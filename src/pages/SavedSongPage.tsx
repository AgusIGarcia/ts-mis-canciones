import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContainer } from "../core/dependency-injection/Container";
import { ViewSong } from "../features/songs/application/ViewSong";
import Song from "../features/songs/delivery/Song";
import SongNotFoundError from "../features/songs/delivery/SongNotFoundError";
import { defaultSong } from "../features/songs/dtos/default/DefaultSong";
import { SongDto } from "../features/songs/dtos/SongDto";
import styles from "./SavedSongPage.module.css";

const SavedSongPage = () => {
  let params = useParams();
  let id: string = params.id || "";
  let viewSong = MyContainer.resolve(ViewSong);
  let [song, setSong] = useState<SongDto>(defaultSong);
  let [error, setError] = useState(false);

  const getSong = async () => {
    setError(false);
    setSong(defaultSong);
    let savedSong = await viewSong.execute(id);
    savedSong === undefined ? setError(true) : setSong(savedSong);
  };

  useEffect(() => {
    getSong();
  }, [id]);

  const getElementToShow = () => {
    if (error) return <SongNotFoundError id={id} />;
    return <Song song={song} searchedSong={false} />;
  };

  return <div className={styles.MainDiv}>{getElementToShow()}</div>;
};

export default SavedSongPage;
