import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ChatPage from "./pages/ChatPage"; 
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";

export default function App() {
  return (
    <div className="app-layout">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigos/:id" element={<ArticleDetail />} />
        <Route path="/chat" element={<ChatPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>

      <Footer />
    </div>
  );
}
