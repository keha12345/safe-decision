
import { Routes, Route } from "react-router";
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

  return (
    <>
      <Header />
      <Routes>
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
