import React, { useContext, useState, useEffect } from "react";

import LogoOscuro from "../assets/logo-oscuro.png";
import LogoClaro from "../assets/logo-claro.png";

import { DataContext } from "../Helpers/Context";
import "./styles/Navbar.css";

const Navbar = () => {
  const { contextSkin, setContextSkin } = useContext(DataContext);
  const { language, setLanguage } = useContext(DataContext);

  const [menuOn, setMenuOn] = useState(false);
  const [skin, setSkin] = useState(false);
  const [textoSkin, setTextoSkin] = useState("Dark Mode");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", contextSkin);
  }, [contextSkin]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HandlerMenu = () => setMenuOn(!menuOn);

  const HandlerLanguage = () => {
    if (!skin) {
      setTextoSkin(language ? "Dark Mode" : "Modo Oscuro");
    } else {
      setTextoSkin(language ? "Light Mode" : "Modo Claro");
    }
    setLanguage(!language);
  };

  const HandlerSkin = () => {
    if (skin) {
      setSkin(false);
      setTextoSkin(language ? "Modo Oscuro" : "Dark Mode");
      setContextSkin(false);
    } else {
      setSkin(true);
      setTextoSkin(language ? "Modo Claro" : "Light Mode");
      setContextSkin(true);
    }
  };

  return (
    <div className={`Navbar${scrolled ? " scrolled" : ""}`}>
      <div className="logo">
        <a href="#/">
          <img
            src={contextSkin ? LogoClaro : LogoOscuro}
            alt=""
            className="logo-img"
          />
        </a>
        <button className="buttonNavbar" onClick={HandlerMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      <nav className={menuOn ? "navOn" : "nav"}>
        <div className="enlaces">
          <li>
            <a href="#about">{language ? "Sobre mi" : "About me"}</a>
          </li>
          <li>
            <a href="#skills">{language ? "Habilidades" : "Skills"}</a>
          </li>
          <li>
            <a href="#experience">{language ? "Experiencia" : "Experience"}</a>
          </li>
          <li>
            <a href="#contact">{language ? "Contacto" : "Contact"}</a>
          </li>
        </div>

        <div className="language" onClick={HandlerLanguage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 8 6 6"></path>
            <path d="m4 14 6-6 2-3"></path>
            <path d="M2 5h12"></path>
            <path d="M7 2h1"></path>
            <path d="m22 22-5-10-5 10"></path>
            <path d="M14 18h6"></path>
          </svg>
          <p className="language-text">{language ? "ES" : "EN"}</p>
        </div>

        <div className="skinButton">
          <button
            className={skin ? "button-skin button-skin-dark" : "button-skin button-skin-light"}
            onClick={HandlerSkin}
          >
            <div className="text-skin">{textoSkin}</div>
            <svg
              aria-hidden="true"
              focusable="false"
              className="eclipse rotate"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
