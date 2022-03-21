import { Route, Routes } from "react-router-dom";
import "./assets/styles/styles.scss";
import HomePage from "./components/pages/homePage";
import CharactersListPage from "./components/pages/charactersListPage/";
import CharacterPage from "./components/pages/Person";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
// @ts-ignore
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<CharactersListPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
