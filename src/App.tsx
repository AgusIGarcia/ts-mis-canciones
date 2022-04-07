import styles from "./App.module.css";
import { MyContainer } from "./core/dependency-injection/Container";
import { useEffect, useState } from "react";
import { SongDto } from "./features/songs/dtos/SongDto";
import { SearchSong } from "./features/songs/application/SearchSong";
import { ListSongs } from "./features/songs/application/ListSongs";
import { SaveSong } from "./features/songs/application/SaveSong";
import { ViewSong } from "./features/songs/application/ViewSong";
import { DeleteSong } from "./features/songs/application/DeleteSong";
import Header from "./core/delivery/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cancion, setCancion] = useState<SongDto>();
  let searchSongs = MyContainer.resolve(SearchSong);
  let listSongs = MyContainer.resolve(ListSongs);
  let saveSong = MyContainer.resolve(SaveSong);
  let viewSong = MyContainer.resolve(ViewSong);
  let deleteSong = MyContainer.resolve(DeleteSong);

  const getCancion = async () => {
    // let resultado = await searchSongs.execute("Avicii", "Levels");
    // setCancion(resultado);
    // console.log(await listSongs.execute());
    // //console.log(await viewSong.execute("2"));
    // console.log(await deleteSong.execute("2"));
  };

  useEffect(() => {
    getCancion();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.DivPrincipal}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
