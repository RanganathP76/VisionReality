import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App(){
  return (
    <BrowserRouter>
    <FloatingWhatsApp />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
