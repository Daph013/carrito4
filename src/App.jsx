import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Tienda from "./pages/Tienta"
import Laptop from "./pages/Laptop"
import Movil from "./pages/Movil"
import Categorias from "./pages/Categorias"

import Footer from "./components/Footer"
import Habilidades from "./pages/Habilidades"
import Carrito from "./contexts/Carrito"


const App = () => {
  return (
    <Carrito>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/laptop" element={<Laptop/>} />
            <Route path="/movil" element={<Movil/>} />
            <Route path="/categorias/:id" element={<Categorias/>} />
            <Route path="/habilidades" element={<Habilidades/>} />
            <Route path="*" element={<Inicio/>} />
        </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  </Carrito>
  )
}

export default App
