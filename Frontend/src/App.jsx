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
import NewArticle from "./pages/NewArticle";
import Logout from "./pages/Logout";
import { useState } from "react";
import { securityService } from "./Dependencies";
import StatusPage from "./pages/Status";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    securityService.IsLoggedIn()
  );

  return (
    <div className="app-layout">
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigos/:id" element={<ArticleDetail />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} />} />
        <Route path="/logout" element={<Logout setLoggedIn={setIsLoggedIn} />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/artigos/novo" element={<NewArticle />} />
        <Route path="/status" element={<StatusPage/>} />
      </Routes>

      <Footer />
    </div>
  );
}
