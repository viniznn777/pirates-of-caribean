import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home/Home";
import Sobre from "./components/pages/Sobre/Sobre";
import Personagens from "./components/pages/Personagens/Personagens";
import Filmes from "./components/pages/Filmes/Filmes";
import Footer from "./components/layout/Footer";
import ButtonPlayer from "./components/ButtonPlayer";

import Angelica from "./components/pages/Personagens/PersonagensPage/Angelica";
import BarbaNegra from "./components/pages/Personagens/PersonagensPage/BarbaNegra";
import Davy from "./components/pages/Personagens/PersonagensPage/Davy";
import Gibs from "./components/pages/Personagens/PersonagensPage/Gibs";
import Hector from "./components/pages/Personagens/PersonagensPage/Hector";
import Jack from "./components/pages/Personagens/PersonagensPage/Jack";
import Lord from "./components/pages/Personagens/PersonagensPage/Lord";
import Salazar from "./components/pages/Personagens/PersonagensPage/Salazar";
import Swann from "./components/pages/Personagens/PersonagensPage/Swann";
import TiaDalma from "./components/pages/Personagens/PersonagensPage/TiaDalma";

function App() {
  return (
    <Router>
      <NavBar />
      <ButtonPlayer />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/personagens" element={<Personagens />}></Route>
        <Route path="/filmes" element={<Filmes />}></Route>

        <Route path="/angelica" element={<Angelica />}></Route>
        <Route path="/barbanegra" element={<BarbaNegra />}></Route>
        <Route path="/davyjones" element={<Davy />}></Route>
        <Route path="/gibbs" element={<Gibs />}></Route>
        <Route path="/hector" element={<Hector />}></Route>
        <Route path="/jack" element={<Jack />}></Route>
        <Route path="/lord" element={<Lord />}></Route>
        <Route path="/salazar" element={<Salazar />}></Route>
        <Route path="/swann" element={<Swann />}></Route>
        <Route path="/tiadalma" element={<TiaDalma />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
