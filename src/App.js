import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/ServiceCard";
import Advice from "./components/FreeAdvice";
import Complain from "./components/ComplaintForm";
import Footer from "./components/Footer"; // ✅ Footer Import Kiya

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar har page pr show hoga */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/complain" element={<Complain />} />
      </Routes>
      <Footer /> {/* ✅ Footer har page ke neeche show hoga */}
    </Router>
  );
}

export default App;
