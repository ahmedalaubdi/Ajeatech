import { useEffect, useState } from "react";

import "./navbar.css";
function NavBar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleActive = () => {
      setActive(false);
    };
    window.addEventListener("scroll", handleActive);
  }, []);
  return (
    <div className="navbar">
      <nav className="wrap-nav">
        <div className="logo">
          <h3>AJWA Tech</h3>{" "}
        </div>
        <div className="tags">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div onClick={() => setActive(!active)} className="wrap-humb">
          <div className={active ? "activeham-b" : "ham-b"} />
        </div>
      </nav>

      <div className={active ? "activeSideMenu" : "sideMenu"}>
        <ul className="sideUl">
          <li>
            <a href="#home" onClick={() => setActive(!active)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setActive(!active)}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActive(!active)}>
              about
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActive(!active)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
