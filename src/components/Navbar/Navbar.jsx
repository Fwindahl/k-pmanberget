import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 98) {
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

          <Link style={{ textDecoration: "none" }}>
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
