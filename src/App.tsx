import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Usuarios from './pages/Usuarios/Usuarios';
import Contacto from './pages/Contacto/Contacto';
import NotFound from './pages/NotFound/NotFound';
import Acerca from './pages/Acerca/Acerca';
import Navbar from './components/Navbar/Navbar';
import UsuarioDetalle from "./pages/UsuarioDetalle/UsuarioDetalle";

function App() {
  return(
    <>
  
  
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
  </Routes>
  
  </>
  );
}

export default App;