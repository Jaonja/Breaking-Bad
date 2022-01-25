import { Route, Routes, Link } from "react-router-dom";
import "./assets/styles/styles.scss";
import MeinPage from "./components/pages/meinPage";
import CharactersListPage from "./components/pages/charactersListPage/";
import CharacterPage from "./components/pages/characterPage/";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">HomePage</Link>
        <Link to="/list">list</Link>
        <Link to="/character">character</Link>
      </header>

      <Routes>
        <Route path="/" element={<MeinPage />} />
        <Route path="/list" element={<CharactersListPage />} />
        <Route path="/character" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
