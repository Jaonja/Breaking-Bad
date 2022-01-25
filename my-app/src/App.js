import { Route, Routes, Link } from "react-router-dom";
import "./assets/styles/styles.scss";
import HomePage from "./components/pages/homePage";
import CharactersListPage from "./components/pages/charactersListPage/";
import CharacterPage from "./components/pages/characterPage/";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <header className={styles.page}>
        <Link to="/">homePage</Link>
        <Link to="/list">List</Link>
        <Link to="/character">Сharacter</Link>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<CharactersListPage />} />
        <Route path="/character" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
