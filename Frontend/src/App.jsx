import "./styles/App.css";
import { Header } from "./components/Header";
import Home from "./page/Home";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app-layout">
      
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}
