import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Kontakta from "./components/Kontakta/Kontakta";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/kontakt" element={<Kontakta />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
