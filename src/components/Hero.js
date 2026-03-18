import React, { useContext } from "react";

import "./styles/Hero.css";

import Typewriter from "typewriter-effect";

import Laptop from "../assets/laptop-claro.png";
import LaptopDark from "../assets/laptop-oscuro.png";
import CoffeeSteam from "../assets/humo-cafe-comprimido.gif";

import { DataContext } from "../Helpers/Context";

function Hero() {
  const { contextSkin, language } = useContext(DataContext);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="title">
          {language ? (
            <h1>
              Hola!{" "}
              <span className="text-accent">Soy Facundo</span>
            </h1>
          ) : (
            <h1>
              Hello!{" "}
              <span className="text-accent">I'm Facundo</span>
            </h1>
          )}
          <p className="hero-subtitle">
            Full-Stack Developer &amp; AI Automation Engineer
            <span className="hero-stack">Python · Node.js · LangChain · AWS</span>
          </p>
        </div>

        <div className={language ? "typewriter-wrap" : "displayNoneHero"}>
          <Typewriter
            options={{ loop: true, delay: 50 }}
            onInit={(typewriter) => {
              typewriter
                .deleteAll()
                .typeString("Y soy desarrollador full-stack")
                .pauseFor(1500)
                .changeDeleteSpeed(100)
                .deleteAll(30)
                .typeString("Construyo agentes de IA con LangChain y LangGraph")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Despliego infraestructura en AWS con Kubernetes")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Automatizo flujos con n8n y pipelines RAG")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Backends escalables con NestJS y PostgreSQL")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Integro LLMs en aplicaciones reales")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Del código al deploy, de punta a punta")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Curioso por naturaleza, ingeniero por vocación")
                .pauseFor(1500)
                .start();
            }}
          />
        </div>

        <div className={!language ? "typewriter-wrap" : "displayNoneHero"}>
          <Typewriter
            options={{ loop: true, delay: 50, deleteSpeed: 1 }}
            onInit={(typewriter) => {
              typewriter
                .deleteAll()
                .typeString("And I am a full-stack developer")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Building AI agents with LangChain and LangGraph")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Deploying infrastructure on AWS with Kubernetes")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Automating workflows with n8n and RAG pipelines")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Scalable backends with NestJS and PostgreSQL")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Integrating LLMs into real-world applications")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("From code to deployment, end to end")
                .pauseFor(1500)
                .deleteAll(30)
                .typeString("Curious by nature, engineer by passion")
                .pauseFor(1500)
                .start();
            }}
          />
        </div>
      </div>

      <div className="hero-visual">
        {/* Preload dark image to avoid latency on theme switch */}
        <img style={{ display: "none" }} src={LaptopDark} alt="" />
        <div className="laptop-wrap">
          <img
            className="hero-image"
            src={contextSkin ? LaptopDark : Laptop}
            alt=""
          />
          <img className="coffee-steam" src={CoffeeSteam} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
