import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/pages/Home";
import AboutUs from "./component/pages/AboutUs";
import ContactUs from "./component/pages/ContactUs";
import DoctrinalEducation from "./component/pages/DoctrinalEducation";
import Health from "./component/pages/Health";
import Raising from "./component/pages/Raising";
import FamilyAndLife from "./component/pages/FamilyAndLife";
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";
import ArticleTest from "./component/pages/ArticleTest";

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
        <Route path="/article" element={<ArticleTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
