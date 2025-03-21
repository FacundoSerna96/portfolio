import React, { useContext, useRef } from "react";
import "animate.css";
import "./styles/ExperiencieTime.css";

import useOnScreen from "../Hooks/useOnScreen";
import { DataContext } from "../Helpers/Context";

const ExperienceTime = () => {
  const { contextSkin } = useContext(DataContext);
  const { language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      className={
        contextSkin
          ? isVisible
            ? "experience-container-dark animate__animated animate__fadeInLeft"
            : "displayNone"
          : isVisible
          ? "experience-container animate__animated animate__fadeInLeft"
          : "displayNone"
      }
      ref={ref}
      id="experience"
    >
      <h2
        className={contextSkin ? "experience-title-dark" : "experience-title"}
      >
        {language ? "Experiencia" : "Experience"}
      </h2>
      <div className="timeline">
        <div
          className={contextSkin ? "timeline-line-dark" : "timeline-line"}
        ></div>

        {/* 2022 - 2023 */}
        <div className="timeline-item">
          <div
            className={contextSkin ? "timeline-dot-dark" : "timeline-dot"}
          ></div>
          <div
            className={
              contextSkin
                ? "timeline-date-dark right-align fecha1"
                : "timeline-date right-align fecha1"
            }
          >
            2022 - 2023
          </div>
          <div className={contextSkin ? "timeline-box-dark" : "timeline-box"}>
            <h3 className="company">ConosurIT</h3>
            {language ? (
              <ul
                className={
                  contextSkin ? "experience-list-dark" : "experience-list"
                }
              >
                <li>Puesto: Full-Stack Development</li>
                <li>
                  Responsabilidades: Desarrollo, Mantenimiento y Migración de
                  Documentos
                </li>
                <li>Tecnologías: Angular, Express, PostgreSQL, Alfresco.</li>
              </ul>
            ) : (
              <ul
                className={
                  contextSkin ? "experience-list-dark" : "experience-list"
                }
              >
                <li>Position: Full-Stack Development</li>
                <li>
                  Responsibilities: Development, Maintenance, and Document
                  Migration
                </li>
                <li>Technologies: Angular, Express, PostgreSQL, Alfresco.</li>
              </ul>
            )}
          </div>
        </div>

        {/* 2024 - Actualmente */}
        <div className="timeline-item">
          <div
            className={contextSkin ? "timeline-dot-dark" : "timeline-dot"}
          ></div>
          <div
            className={contextSkin ? "timeline-box-2-dark" : "timeline-box-2"}
          >
            <h3 className="company">MPSolution</h3>
            {language ? (
              <ul
                className={
                  contextSkin ? "experience-list-dark" : "experience-list"
                }
              >
                <li>Puesto: Full-Stack Development</li>
                <li>
                  Responsabilidades: Desarrollo, Despliegues, Mantenimiento e
                  Implementación de modelos de IA.
                </li>
                <li>
                  Tecnologías: React, Next.js, Nest.js, PostgreSQL, AWS,
                  Alfresco, OpenAI.
                </li>
              </ul>
            ) : (
              <ul
                className={
                  contextSkin ? "experience-list-dark" : "experience-list"
                }
              >
                <li>Position: Full-Stack Development</li>
                <li>
                  Responsibilities: Development, Deployments, Maintenance, and
                  Implementation of AI Models.
                </li>
                <li>
                  Technologies: React, Next.js, Nest.js, PostgreSQL, AWS,
                  Alfresco, OpenAI.
                </li>
              </ul>
            )}
          </div>
          <div
            className={
              contextSkin
                ? "timeline-date-dark left-align fecha1"
                : "timeline-date left-align fecha1"
            }
          >
            {
              language
              ?
              "2024 - Actualmente"
              :
              "2024 - Present"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTime;
