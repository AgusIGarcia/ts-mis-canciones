import logo from "./logo.svg";
import "./App.css";
import { MyContainer } from "./core/dependency-injection/Container";
import { useEffect, useState } from "react";
import { SongDto } from "./features/songs/dtos/SongDto";
import { SearchSong } from "./features/songs/application/SearchSong";
import { ListSongs } from "./features/songs/application/ListSongs";
import { SaveSong } from "./features/songs/application/SaveSong";
import { ViewSong } from "./features/songs/application/ViewSong";
import { DeleteSong } from "./features/songs/application/DeleteSong";



function App() {
  const[cancion, setCancion] = useState<SongDto>();
  let searchSongs = MyContainer.resolve(SearchSong);
  let listSongs = MyContainer.resolve(ListSongs);
  let saveSong = MyContainer.resolve(SaveSong);
  let viewSong = MyContainer.resolve(ViewSong);
  let deleteSong = MyContainer.resolve(DeleteSong);
  const getCancion = async () => {
    let resultado = await searchSongs.execute("Avicii","Levels");
    setCancion(resultado);
    console.log(await listSongs.execute());
    //console.log(await viewSong.execute("2"));
    console.log(await deleteSong.execute("2"));
  }

  useEffect(() => {
    getCancion();
  },[]);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{cancion?.artist.name}</p>
      <p>{cancion?.artist.img}</p>
      <p>{cancion?.name}</p>
      <p>{cancion?.lyrics}</p>
    </div>
  );
}

export default App;

