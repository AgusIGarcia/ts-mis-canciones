import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DeleteSong from "../features/songs/delivery/DeleteSongComponent";
import ListMySongs from "../features/songs/delivery/ListMySongs";
import Searcher from "../features/songs/delivery/Searcher";
import { defaultSong } from "../features/songs/dtos/default/DefaultSong";
import styles from "./Home.module.css";
import SearchSongPage from "./SearchSongPage";

const Home = () => {
  const [songToDelete, setSongToDelete] = useState(defaultSong);
  const [thereIsSongToDelete, setThereIsSongToDelete] =
    useState<boolean>(false);

  return (
    <div>
      <Searcher />
      <div className={styles.MainDiv}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ListMySongs
                  setSongToDelete={setSongToDelete}
                  setThereIsSongToDelete={setThereIsSongToDelete}
                />
                <DeleteSong
                  open={thereIsSongToDelete}
                  setOpen={setThereIsSongToDelete}
                  song={songToDelete}
                />
              </>
            }
          />
          <Route path="/search" element={<SearchSongPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
