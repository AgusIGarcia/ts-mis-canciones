import logo from "./logo.svg";
import "./App.css";
import { MyContainer } from "./core/dependency-injection/Container";
import { ViewSong } from "./features/songs/application/ViewSong";
import { useEffect, useState } from "react";
import { SongDto } from "./features/songs/dtos/SongDto";



function App() {
  const[cancion, setCancion] = useState<SongDto>();
  const getCancion = async () => {
    let vs = MyContainer.resolve(ViewSong);
    let resultado = await vs.execute("1");
    setCancion(resultado);
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
      <p>{cancion?.name}</p>
    </div>
  );
}

export default App;

