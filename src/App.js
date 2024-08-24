import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DoctrinalEducation from "./pages/DoctrinalEducation";
import Health from "./pages/Health";
import Raising from "./pages/Raising";
import FamilyAndLife from "./pages/FamilyAndLife";
import ArticleTest from "./pages/ArticleTest";
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DoctrinalEducation" element={<DoctrinalEducation />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Raising" element={<Raising />} />
        <Route path="/FamilyAndLife" element={<FamilyAndLife />} />
        <Route path="/article" element={<ArticleTest />} S />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
