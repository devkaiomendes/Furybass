import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./Containers/Login";
import { Register } from "./Containers/Register";
import { Recuperacao } from "./Containers/Recuperacao-senha";
import { Veiculos } from "./Containers/Veiculos";
import { Produtos } from "./Containers/Produtos";
import { Servicos } from "./Containers/Servicos";
import { Anunciar } from "./Containers/Anunciar";
import { Anuncios } from "./Containers/Anuncios";


function App() {
  return (
   
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recuperacao" element={<Recuperacao />} />
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/anunciar" element={<Anunciar />} />
      <Route path="/anuncios" element={<Anuncios />} />
    </Routes>
 
  );
}

export default App;
