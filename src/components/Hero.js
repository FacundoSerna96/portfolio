import React, { useContext, useState } from "react";

import "./styles/Hero.css";

//efecto maquina de escribir
import Typewriter from "typewriter-effect";

import Laptop from "../assets/laptop-claro.png";
import LaptopDark from "../assets/laptop-oscuro.png";
import CoffeeSteam from "../assets/humo-cafe-comprimido.gif";

import { DataContext } from "../Helpers/Context";

function Hero() {
  const { contextSkin } = useContext(DataContext);
  const { language } = useContext(DataContext);

  const { title, setTitle } = useState("Y soy desarrollador full-stack");

  return (
    <div className="hero">
      <div className="title">
        {language ? (
          <h1 className={contextSkin ? "h1-dark" : ""}>
            Hola!{" "}
            <span className={contextSkin ? "text-dark" : "text-red"}>
              Soy Facundo
            </span>
          </h1>
        ) : (
          <h1 className={contextSkin ? "h1-dark" : ""}>
            Hello!{" "}
            <span className={contextSkin ? "text-dark" : "text-red"}>
              I'm Facundo
            </span>
          </h1>
        )}
      </div>

      <div
        className={
          contextSkin
            ? language
              ? "typewriter-dark"
              : "displayNoneHero"
            : language
            ? "typewriter"
            : "displayNoneHero"
        }
      >
        <Typewriter
          options={{
            loop: true,
            delay: 50
          }}
          onInit={(typewriter) => {
            typewriter
              .deleteAll()
              .typeString("Y soy desarrollador full-stack")
              .pauseFor(1500)
              .changeDeleteSpeed(100)
              .deleteAll(30)
              .typeString("Especialista en React, Angular y Node.js")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Construyo aplicaciones web escalables")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Backend sólido con Node.js, Express y Nest.js")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Trabajo con metodologías ágiles como Scrum")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Automatizo procesos con APIs de IA")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Experiencia en AWS y entornos Linux")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Siempre aprendiendo y explorando nuevas tecnologías")
              .pauseFor(1500)
              .start();
          }}
        />
      </div>
      <div
        className={
          contextSkin
            ? language
              ? "displayNoneHero"
              : "typewriter-dark"
            : language
            ? "displayNoneHero"
            : "typewriter"
        }
      >
        <Typewriter
          options={{
            loop: true,
            delay: 50,
            deleteSpeed: 1
          }}
          onInit={(typewriter) => {
            typewriter
              .deleteAll()
              .typeString("And I am a full-stack developer")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Specialist in React, Angular, and Node.js")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Building scalable web applications")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Solid backend with Node.js, Express and Nest.js")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Working with agile methodologies like Scrum")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Automating processes with AI APIs")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Experience with AWS and Linux environments")
              .pauseFor(1500)
              .deleteAll(30)
              .typeString("Always learning and exploring new technologies")
              .pauseFor(1500)
              .start();
          }}
        />
      </div>

      <div className="separator"></div>

      <img className="coffee-steam" src={CoffeeSteam} alt="" />

      {/* Cargo la laptop-dark antes y no lo muestro
          de esa forma no hay latencia entre
          una imagen y otra al cambiar el tema */}
      <img style={{ display: "none" }} src={LaptopDark} alt="" />

      <img
        className="hero-image"
        src={contextSkin ? LaptopDark : Laptop}
        alt=""
      />
    </div>
  );
}

export default Hero;
