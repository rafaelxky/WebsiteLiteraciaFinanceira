import "./styles/App.css";
import { Header } from "./components/Header";
import Home from "./page/Home";
import { Footer } from "./components/Footer";

import Articles from "./page/Articles";

import { Routes,Route } from "react-router-dom";


export default function App() {
  return (
    <div className="app-layout">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
      </Routes>
      <Footer/>
    </div>
  );
}
