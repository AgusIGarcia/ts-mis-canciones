import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoaderMui from "../core/delivery/mui-components/LoaderMui";
import { MyContainer } from "../core/dependency-injection/Container";
import { SearchSong } from "../features/songs/application/SearchSong";
import SearchError from "../features/songs/delivery/SearchError";
import Song from "../features/songs/delivery/Song";
import { defaultSong } from "../features/songs/dtos/default/DefaultSong";
import { SongDto } from "../features/songs/dtos/SongDto";
import styles from "./SearchSongPage.module.css";

const LOADER_SIZE = "20vw";

const SearchSongPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let [song, setSong] = useState<SongDto>(defaultSong);
  let artistName = searchParams.get("artist") || "";
  let songName = searchParams.get("song") || "";
  let searchSongs = MyContainer.resolve(SearchSong);

  const search = async () => {
    try {
      setError(false);
      setLoading(true);
      setSong(await searchSongs.execute(artistName, songName));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, [artistName, songName]);

  const getElementToShow = () => {
    if (loading)
      return <LoaderMui className={styles.LoaderDiv} size={LOADER_SIZE} />;
    if (error)
      return <SearchError artistName={artistName} songName={songName} />;
    return <Song song={song} searchedSong={true} />;
  };

  return <>{getElementToShow()}</>;
};

export default SearchSongPage;
