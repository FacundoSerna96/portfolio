import React, { useContext, useRef } from "react";

import "animate.css";
import "./styles/About.css";

import profile from "../assets/photos/profile.jpeg";
import profileCircle from "../assets/photos/profile-circle.jpg";

import cv from "../assets/CV.pdf";
import resume from "../assets/Resume.pdf";

import useOnScreen from "../Hooks/useOnScreen";
import { DataContext } from "../Helpers/Context";

function About() {
  const { contextSkin, language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const gitHubUrl = "https://github.com/FacundoSerna96";
  const linkedinUrl = "https://www.linkedin.com/in/FacundoSerna/";

  return (
    <div
      ref={ref}
      className={
        isVisible
          ? "about-component animate__animated animate__fadeInLeft"
          : "displayNone"
      }
      id="about"
    >
      <div className="photo">
        <img className="image" src={profile} alt="" />
        <img className="image-circle" src={profileCircle} alt="" />
      </div>

      <div
        className={contextSkin ? "about-body about-body-dark" : "about-body"}
      >
        <h2>Facundo Serna</h2>
        {language ? (
          <p>
            Desde siempre me ha interesado entender cómo funcionan las cosas y
            cómo la tecnología puede usarse para resolver problemas de manera
            eficiente.
          </p>
        ) : (
          <p>
            I've always been interested in understanding how things work and how
            technology can be used to solve problems efficiently.
          </p>
        )}
        {language ? (
          <p>
            Me recibí de Analista Programador Universitario en la Universidad
            Nacional de la Patagonia, y actualmente resido en Buenos Aires,
            Argentina.
          </p>
        ) : (
          <p>
            I graduated as a University Systems Analyst and Programmer from the
            National University of Patagonia, and I currently live in Buenos
            Aires, Argentina.
          </p>
        )}
        {language ? (
          <p>
            Actualmente, estoy explorando e implementando soluciones que
            integran inteligencia artificial para mejorar la eficiencia y la
            toma de decisiones en distintos entornos.
          </p>
        ) : (
          <p>
            Currently, I am exploring and implementing solutions that integrate
            artificial intelligence to improve efficiency and decision-making in
            various environments.
          </p>
        )}
        {language ? (
          <p>
            Trabajo con metodologías ágiles como Scrum y Kanban, lo que me
            permite adaptarme a equipos dinámicos y colaborando en ciclos de
            desarrollo continuo.
          </p>
        ) : (
          <p>
            I work with agile methodologies such as Scrum and Kanban, which
            allows me to adapt to dynamic teams and collaborate in continuous
            development cycles.
          </p>
        )}
        {language ? (
          <p>
            Estoy en búsqueda de nuevas oportunidades donde pueda aplicar mis
            conocimientos, enfrentar desafíos técnicos y seguir creciendo
            profesionalmente.
          </p>
        ) : (
          <p>
            I am looking for new opportunities where I can apply my knowledge,
            face technical challenges, and continue growing professionally.
          </p>
        )}

        <div className="buttonsContact">
        <button
            className={contextSkin ? "button-cv button-cv-dark" : "button-cv"}
            onClick={() => {
              window.open(`${linkedinUrl}`, "_blank");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <p>@FacundoSerna96</p>
          </button>
          <button
            className={contextSkin ? "button-cv button-cv-dark" : "button-cv"}
            onClick={() => {
              window.open(`${gitHubUrl}`, "_blank");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <p>@FacundoSerna</p>
          </button>
          <button
            className={contextSkin ? "button-cv button-cv-dark" : "button-cv"}
            onClick={() => {
              language 
              ?
              window.open(`${cv}`, "_blank")
              :
              window.open(`${resume}`, "_blank")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-arrow-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
            </svg>
            {
              language
              ?
              <p>Descargar CV</p>
              :
              <p>Download CV</p>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
