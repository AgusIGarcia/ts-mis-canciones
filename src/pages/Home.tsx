import { useState } from "react";
import LoaderMui from "../core/delivery/mui-components/LoaderMui";
import Searcher from "../features/songs/delivery/Searcher";
import SearchError from "../features/songs/delivery/SearchError";
import Song from "../features/songs/delivery/Song";
import { ArtistDto } from "../features/songs/dtos/ArtistDto";
import { SongDto } from "../features/songs/dtos/SongDto";
import styles from "./Home.module.css";

const LOADER_SIZE = "20vw";

const defaultArtist: ArtistDto = {
  name: "",
  img: "",
};

const defaultSong: SongDto = {
  name: "",
  artist: defaultArtist,
  lyrics: "",
};

const Home = () => {
  const [searchedSong, setSearchedSong] = useState(defaultSong);
  const [error, setError] = useState(false);
  const [searching, setSearching] = useState(false);

const getElementToShow = () => {
    if(searching) return <LoaderMui className={styles.LoaderDiv} size={LOADER_SIZE}/>
    if(searchedSong.lyrics!=="") return  <Song song={searchedSong}/>
    if(error) return  <SearchError artistName={searchedSong.artist.name} songName={searchedSong.name} />
    return <p>Lista Canciones</p>
}
  return (
    <div>
      <Searcher setSearchedSong={setSearchedSong} setError={setError} setSearching={setSearching} />
      <div className={styles.MainDiv}>{getElementToShow()}</div>
    </div>
  );
};

export default Home;
