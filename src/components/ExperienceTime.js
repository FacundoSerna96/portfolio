import React, { useContext } from 'react'
import "./styles/ExperiencieTime.css";

import { DataContext } from '../Helpers/Context';

const ExperienceTime = () => {
    const {contextSkin} = useContext(DataContext)
    const {language} = useContext(DataContext)
  return (
    <div className={contextSkin ? "experience-container-dark" : "experience-container"}>
      <h2 className={contextSkin ? "experience-title-dark" : "experience-title"}>{language ? "Experiencia" : "Experience"}</h2>
      <div className="timeline">
        <div className={ contextSkin ? "timeline-line-dark" : "timeline-line"}></div>

        {/* 2022 - 2023 */}
        <div className="timeline-item">
          <div className={contextSkin ? "timeline-dot-dark" : "timeline-dot"}></div>
          <div className={contextSkin ? "timeline-date-dark right-align fecha1" : "timeline-date right-align fecha1"}>2022 - 2023</div>
          <div className={contextSkin ? "timeline-box-dark" : "timeline-box"}>
            <h3 className="company">ConosurIT</h3>
            <ul className={contextSkin ? "experience-list-dark" : "experience-list"}>
              <li>
                Puesto: Full-Stack Development
              </li>
              <li>
                Responsabilidades: Desarrollo, Mantenimiento y
                Migración de Documentos
              </li>
              <li>
                Tecnologías: Java, Spring Boot, PostgreSQL,
                Angular, Alfresco
              </li>
            </ul>
          </div>
        </div>

        {/* 2024 - Actualmente */}
        <div className="timeline-item">
        <div className={contextSkin ? "timeline-dot-dark" : "timeline-dot"}></div>
          <div className={contextSkin ? "timeline-box-2-dark" : "timeline-box-2"}>
            <h3 className="company">MPSolution</h3>
            <ul className={contextSkin ? "experience-list-dark" : "experience-list"}>
              <li>
                Puesto: Full-Stack Development
              </li>
              <li>
                Responsabilidades: Desarrollo, Mantenimiento e
                Implementación de modelos de IA
              </li>
              <li>
                Tecnologías: Node, Express, React, PostgreSQL,
                Alfresco
              </li>
            </ul>
          </div>
          <div className={contextSkin ? "timeline-date-dark left-align fecha1" : "timeline-date left-align fecha1"}>2024 - Actualmente</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTime;
