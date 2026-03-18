import React, { useContext, useRef } from "react";
import "./styles/ExperiencieTime.css";

import useOnScreen from "../Hooks/useOnScreen";
import { DataContext } from "../Helpers/Context";

const experiences = [
  {
    file: "proficient.sh",
    company: "Proficient Enterprises",
    roleEs: "Full Stack Developer & DevOps Engineer",
    roleEn: "Full Stack Developer & DevOps Engineer",
    location: "Cheyenne, Wyoming, USA · Remote",
    dateEs: "Agosto 2025 – Actualidad",
    dateEn: "August 2025 – Present",
    descEs: "Responsable de despliegues de infraestructura en AWS EKS para clientes enterprise, trabajando con ecosistemas Alfresco, Keycloak y Activiti en entornos productivos complejos.",
    descEn: "Handling infrastructure deployments on AWS EKS for enterprise clients, working with Alfresco, Keycloak, and Activiti ecosystems across complex production environments.",
    achievementsLabel: true,
    itemsEs: [
      "Alfresco: customización de modelos de datos, desarrollo de Web Scripts e implementación de búsqueda con Lucene, CMIS y FTS",
      "Activiti/APS: desarrollo de flujos de procesos de negocio, formularios de tareas y automatización de aprobaciones",
      "Diagnóstico y resolución de un problema crítico en ACT_EVT_LOG (7GB+ de bloat), optimización de Spring Batch y pool HikariCP",
      "Keycloak: federación LDAP, flujos OAuth2/JWT, temas personalizados e integración SSO entre servicios",
      "AWS: gestión de pipelines, S3, EC2, EKS con Kubernetes y Helm, OpenSearch · Aurora RDS: optimización de queries e índices",
      "Migraciones de MySQL a PostgreSQL y de Docker Compose a Kubernetes en entornos de producción",
      "Automatización con IA: flujos en n8n con pipelines RAG, embeddings de OpenAI e integración de pgvector",
    ],
    itemsEn: [
      "Alfresco: data model customization, Web Scripts development, and search implementation with Lucene, CMIS, and FTS",
      "Activiti/APS: built and maintained business process workflows, task forms, and automated approval flows",
      "Diagnosed and fixed a critical ACT_EVT_LOG bloat issue (7GB+), optimized Spring Batch jobs and HikariCP pool settings",
      "Keycloak: LDAP federation, OAuth2/JWT flows, custom login themes, and cross-service SSO setup",
      "AWS: pipelines, S3, EC2, EKS with Kubernetes and Helm, OpenSearch · Aurora RDS: query and index optimization",
      "Database and container migrations: MySQL to PostgreSQL and Docker Compose to Kubernetes in production",
      "AI automation: n8n workflows with RAG pipelines, OpenAI embeddings, and pgvector for semantic search",
    ],
  },
  {
    file: "conosurit.sh",
    company: "ConoSurIT",
    roleEs: "Full Stack Web Developer",
    roleEn: "Full Stack Web Developer",
    location: "Córdoba, Argentina",
    dateEs: "2022 – 2023",
    dateEn: "2022 – 2023",
    descEs: "Desarrollo y mantenimiento de aplicaciones web enterprise orientadas a gestión documental y automatización de flujos, utilizando Angular, Node.js y PostgreSQL.",
    descEn: "Built and maintained enterprise web applications focused on document management and workflow automation, using Angular, Node.js, and PostgreSQL.",
    achievementsLabel: true,
    itemsEs: [
      "Optimización de rendimiento en ~40% mediante refactorización de arquitectura de componentes y estrategias de lazy loading",
      "Diseño e implementación de backend basado en microservicios, aumentando la modularidad y escalabilidad del sistema",
      "Coordinación y planificación de tareas dentro del equipo, actuando como referente técnico durante los sprints",
      "Desarrollo full-stack con Angular 12/16, Angular Material, Express y Alfresco CMIS para gestión documental",
      "Creación de APIs REST e integración con servicios externos para flujos de almacenamiento y recuperación de documentos",
      "Uso de Docker en entornos locales y participación en pipelines de despliegue",
    ],
    itemsEn: [
      "Performance improvement of ~40% through component architecture refactoring and lazy loading strategies",
      "Designed and implemented a microservices-based backend that increased system modularity and scalability",
      "Handled task coordination within the development team, acting as technical reference during sprints",
      "Full-stack development with Angular 12/16, Angular Material, Express, and Alfresco CMIS for document handling",
      "Built REST APIs and integrated third-party services for document storage and retrieval workflows",
      "Used Docker for local environments and participated in deployment pipelines",
    ],
  },
];

const ExperienceTime = () => {
  const { language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      className={isVisible ? "experience-container exp-visible" : "experience-container"}
      ref={ref}
      id="experience"
    >
      <span className="section-label experience-section-label">
        {language ? "03 — Trayectoria" : "03 — Background"}
      </span>
      <h2 className="experience-title">
        {language ? "Experiencia" : "Experience"}
      </h2>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-line-col">
              <div className="exp-dot" />
              <div className="exp-connector" />
            </div>

            <div className="exp-card">
              <div className="exp-terminal-bar">
                <span className="exp-prompt">$</span>
                <span className="exp-filename">{exp.file}</span>
              </div>

              <div className="exp-header">
                <div className="exp-header-left">
                  {exp.roleEn && (
                    <p className="exp-role-title">
                      {language ? exp.roleEs : exp.roleEn}
                    </p>
                  )}
                  <h3 className="exp-role">{exp.company}</h3>
                  <div className="exp-meta exp-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className="exp-date">
                  {language ? exp.dateEs : exp.dateEn}
                </span>
              </div>

              {exp.descEn && (
                <p className="exp-desc">
                  {language ? exp.descEs : exp.descEn}
                </p>
              )}

              {exp.achievementsLabel && (
                <p className="exp-achievements-label">
                  &gt; {language ? "Logros clave:" : "Key achievements:"}
                </p>
              )}

              <ul className="exp-list">
                {(language ? exp.itemsEs : exp.itemsEn).map((item, j) => (
                  <li key={j}>
                    <span className="exp-bullet" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="exp-hover-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTime;
