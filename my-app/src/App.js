import { Route, Routes, Link } from "react-router-dom";
import "./assets/styles/styles.scss";
import HomePage from "./components/pages/homePage";
import CharactersListPage from "./components/pages/charactersListPage/";
import CharacterPage from "./components/pages/Person";
// @ts-ignore
import styles from "./styles.module.scss";
function App() {
  return (
    <>
      <header className={styles.page}>
        <Link to="/">HomePage</Link>
        <Link to="/list">List</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<CharactersListPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
