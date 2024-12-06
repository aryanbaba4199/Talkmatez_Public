import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/NavBar";
import Aboutus from "./Components/About/Aboutus";
import Contactus from "./Components/About/Contactus";
import Faqs from "./Components/About/Faqs";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Components/About/Privacy";
import Terms from "./Components/About/Terms";
import Refund from "./Components/About/Refund";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/tnc" element={<Terms/>} />
        <Route path="/refund" element={<Refund/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
