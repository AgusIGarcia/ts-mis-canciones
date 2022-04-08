import styles from "./App.module.css";
import Header from "./core/delivery/Header";
import Home from "./pages/Home";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import SavedSongPage from "./pages/SavedSongPage";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.DivPrincipal}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/songs/:id" element={<SavedSongPage />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
