import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DoctrinalEducation from "./pages/DoctrinalEducation";
import Health from "./pages/Health";
import Raising from "./pages/Raising";
import FamilyAndLife from "./pages/FamilyAndLife";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/DoctrinalEducation" element={<DoctrinalEducation />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Raising" element={<Raising />} />
        <Route path="/FamilyAndLife" element={<FamilyAndLife />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
