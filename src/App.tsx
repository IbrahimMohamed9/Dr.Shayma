import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/pages/Home";
import AboutUs from "./component/pages/AboutUs";
import ContactUs from "./component/pages/ContactUs";
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";
import ArticleTest from "./component/pages/ArticleTest";
import Login from "./component/pages/Login";
import SignUp from "./component/pages/SignUp";
import HonorList from "./component/pages/HonorList";
import Profile from "./component/pages/Profile";
import SubjectTemplate from "./component/templates/SubjectTemplate";

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
          path="topic/:category/:subcategory?"
          element={<SubjectTemplate />}
        />
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
