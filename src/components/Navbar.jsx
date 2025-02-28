import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Electro Fix</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/advice" onClick={closeMenu}>Free Mashwara</Link>
        <Link to="/complain" onClick={closeMenu}>Complain</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
