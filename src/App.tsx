import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

export default function App() {
  return (
    <BrowserRouter basename="/vibe-logics">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}