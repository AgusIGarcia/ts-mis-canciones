import { useState } from "react";
import LoaderMui from "../core/delivery/mui-components/LoaderMui";
import ListMySongs from "../features/songs/delivery/ListMySongs";
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
  id:"0",
  name: "",
  artist: defaultArtist,
  lyrics: "",
};

const Home = () => {
  const [searchedSong, setSearchedSong] = useState(defaultSong);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

const getElementToShow = () => {
    if(loading) return <LoaderMui className={styles.LoaderDiv} size={LOADER_SIZE}/>
    if(searchedSong.lyrics!=="") return  <Song song={searchedSong} searchedSong={true}/>
    if(error) return  <SearchError artistName={searchedSong.artist.name} songName={searchedSong.name} />
    return <ListMySongs />
}
  return (
    <div>
      <Searcher setSearchedSong={setSearchedSong} setError={setError} setSearching={setLoading} />
      <div className={styles.MainDiv}>{getElementToShow()}</div>
    </div>
  );
};

export default Home;
