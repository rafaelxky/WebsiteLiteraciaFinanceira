import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";

export default function App() {
  return (
    <div className="app-layout">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigos/:id" element={<ArticleDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
