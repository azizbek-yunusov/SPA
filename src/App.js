import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./style/apply.css"
import "./style/main.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Error from "./pages/Error";
import Category from "./pages/Category";
import Recipe from "./components/Recipe";

export default function App() {
  return (
    <>
      <Header />
      <main className="container content my-2 md:my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/category/:name" element={<Category/>} />
          <Route path="/meal/:id" element={<Recipe/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
