
import { Routes, Route } from "react-router";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Index from './pages/Index';
import Delivery from './pages/Delivery';
import Cooperation from './pages/Cooperation';
import Additional from './pages/Additional';
import Faq from './pages/Faq';
import Info from './pages/Info';
import Contacts from './pages/Contacts';
import Grat from './pages/Grat';
import Header from './elements/Header';
import Footer from './elements/Footer';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // длительность анимации в мс
      once: true,    // анимация только при первом скролле
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/safe-decision" element={<Index />} />
        <Route path="/safe-decision/delivery" element={<Delivery />} />
        <Route path="/safe-decision/cooperation" element={<Cooperation />} />
        <Route path="/safe-decision/additional" element={<Additional />} />
        <Route path="/safe-decision/faq" element={<Faq />} />
        <Route path="/safe-decision/info" element={<Info />} />
        <Route path="/safe-decision/contacts" element={<Contacts />} />
        <Route path="/safe-decision/grat" element={<Grat />} />

        <Route path="/" element={<Index />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/grat" element={<Grat />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
