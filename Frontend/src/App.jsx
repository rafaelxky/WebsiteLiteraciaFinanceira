import "./styles/App.css";
import { Header } from "./components/header/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";

import Articles from "./pages/Articles";

import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";


export default function App() {
  return (
    <div className="app-layout">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}
