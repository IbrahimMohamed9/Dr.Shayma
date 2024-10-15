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
import Login from "./component/pages/Login";
import SignUp from "./component/pages/SignUp";
import HonorList from "./component/pages/HonorList";
import Profile from "./component/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/DoctrinalEducation/:category?"
          element={<DoctrinalEducation />}
        />
        <Route path="/Health/:category?" element={<Health />} />
        <Route path="/Raising/:category?" element={<Raising />} />
        <Route path="/FamilyAndLife/:category?" element={<FamilyAndLife />} />
        <Route path="/honorList" element={<HonorList />} />
        <Route path="/article" element={<ArticleTest />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
