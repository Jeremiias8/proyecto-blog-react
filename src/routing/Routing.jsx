
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Articulos } from "../components/pages/Articulos"
import { Inicio } from "../components/pages/Inicio"
import { Crear } from "../components/pages/Crear"
import { Header } from "../components/layout/Header"
import { Nav } from "../components/layout/Nav"
import { Sidebar } from "../components/layout/Sidebar"
import { Footer } from '../components/layout/Footer'
import { Contacto } from "../components/pages/Contacto"

export const Routing = () => {

  return (
    <BrowserRouter>

      {/* Layout */}
      <Header />
      <Nav />

      {/* Main content */}
      <section id="content" className="content m-2 p-2">
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulos" element={<Crear />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>Error 404</h1>} />

        </Routes>
      </section>

      <Sidebar />

      <Footer />

    </BrowserRouter>
  )

}
