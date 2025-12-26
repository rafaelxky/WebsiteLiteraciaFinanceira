import "./styles/App.css";
import { Header } from "./components/header/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";

import Articles from "./pages/Articles";

import { Routes, Route } from "react-router-dom";

import BudgetTracker from "./pages/BudgetTracker";
import SavingsPlanner from "./pages/SavingsPlanner";
import DebtPayoff from "./pages/DebtPayoff";

export default function App() {
  return (
    <div className="app-layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/projects/budget-tracker" element={<BudgetTracker />} />
        <Route path="/projects/savings-planner" element={<SavingsPlanner />} />
        <Route path="/projects/debt-payoff" element={<DebtPayoff />} />
      </Routes>
      <Footer />
    </div>
  );
}
