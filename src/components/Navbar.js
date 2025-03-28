import React, { useContext, useState } from "react";

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

  const HandlerMenu = () => {
    if (menuOn) {
      setMenuOn(false);
    } else {
      setMenuOn(true);
    }
  };

  const HandlerLanguage = () => {
    if(!skin){
      if(language){
        setTextoSkin((t) => (t = "Dark Mode"));
      }else{
        setTextoSkin((t) => (t = "Modo Oscuro"));
      }
    }else{
      if(language){
        setTextoSkin((t) => (t = "Light Mode"));
      }else{
        setTextoSkin((t) => (t = "Modo Claro"));
      }
    }
    setLanguage(!language);
  };

  const HandlerSkin = () => {
    if (skin) {
      setSkin(false);
      if(language){
        setTextoSkin((t) => (t = "Modo Oscuro"));
      }else{
        setTextoSkin((t) => (t = "Dark Mode"));
      }

      setContextSkin(false);
    } else {
      setSkin(true);
      if(language){
        setTextoSkin((t) => (t = "Modo Claro"));
      }else{
        setTextoSkin((t) => (t = "Light Mode"));
      }

      setContextSkin(true);
    }
  };

  const globalStyle = `
                    body {
                      background-color : ${contextSkin ? "#1D131D" : "#EAE7DC"};
                    }
                    a {
                      color: ${contextSkin ? "#281D22" : "#EAE7DC"};
                    }
          `;

  return (
    <div className="Navbar">
      {/* Permite cambiar el color a toda la pagina */}
      <style jsx={"true"} global={"true"}>
        {globalStyle}
      </style>

      <div className="logo">
        <a href="#/" className="">
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
        {language ? (
          <div className={contextSkin ? "enlaces enlaces-dark" : "enlaces"}>
            <li>
              <div className="square"></div>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#experience">Experiencia</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#contact">Contacto</a>
            </li>
          </div>
        ) : (
          <div className={contextSkin ? "enlaces enlaces-dark" : "enlaces"}>
            <li>
              <div className="square"></div>
              <a href="#about">About me</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <div className="square"></div>
              <a href="#contact">Contact</a>
            </li>
          </div>
        )}

        <div
          className={contextSkin ? "language-dark" : "language"}
          onClick={HandlerLanguage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-languages "
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
            className={
              skin
                ? "button-skin button-skin-dark"
                : "button-skin button-skin-light"
            }
            onClick={HandlerSkin}
          >
            <div className="text-skin">{textoSkin}</div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="adjust"
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
