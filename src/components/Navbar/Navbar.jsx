import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="li-container">
              <li>Hem</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <div className="li-container">
              <li>Event</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <div className="li-container">
              <li>Catering</li>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <div className="li-container">
              <li>Priser</li>
            </div>
          </Link>

          <Link to="/kontakt" style={{ textDecoration: "none" }}>
            <div className="li-container">
              <li>Kontakt</li>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
