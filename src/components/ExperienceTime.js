import React, { useContext, useRef } from "react";
import "./styles/ExperiencieTime.css";

import useOnScreen from "../Hooks/useOnScreen";
import { DataContext } from "../Helpers/Context";

const experiences = [
  {
    file: "proficient.sh",
    company: "Proficient Enterprises",
    roleEs: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    location: "Cheyenne, Wyoming, USA · Remote",
    dateEs: "Agosto 2025 – Actualidad",
    dateEn: "August 2025 – Present",
    descEs: "Desarrollo backend y full stack para una plataforma enterprise de gran escala, combinando integraciones de IA (RAG, agentes LLM) con infraestructura cloud en AWS EKS y los ecosistemas Alfresco, Keycloak y Activiti.",
    descEn: "Full stack and backend development for a large-scale enterprise platform, combining AI integrations (RAG, LLM agents) with AWS EKS cloud infrastructure and the Alfresco, Keycloak, and Activiti ecosystems.",
    achievementsLabel: true,
    itemsEs: [
      "Migración en producción de una plataforma de gran escala (8–10 TB de datos, 420M+ documentos) de Docker Compose a Kubernetes en AWS EKS y de MySQL a PostgreSQL",
      "Asistente de logística con IA: chatbot en lenguaje natural sobre camiones, envíos y cargas, con automatización de procesos operativos en n8n",
      "Búsqueda de contratos con IA: consultas en lenguaje natural y resumen automático de documentos mediante RAG con LangChain, embeddings de OpenAI y pgvector",
      "Plataforma de análisis de CVs con IA para RR.HH., con pagos integrados vía Mercado Pago",
      "APIs REST en Node.js/NestJS y Python para e-commerce (B2C y B2B) y un sistema de reservas de entrenamiento integrado con WhatsApp",
      "Dashboards en React/TypeScript para seguimiento de envíos, monitoreo de licitaciones y búsqueda de documentos, y automatización de generación de leads con n8n y web scraping",
      "Resolución de un incidente crítico en producción por el crecimiento descontrolado de una tabla (7GB+), ajustando jobs de Spring Batch y el pool de HikariCP; SSO con Keycloak integrado a Active Directory y optimización de queries en Aurora RDS",
    ],
    itemsEn: [
      "Led a production migration of a large-scale platform (8–10 TB of data, 420M+ documents) from Docker Compose to Kubernetes on AWS EKS and from MySQL to PostgreSQL",
      "Built an AI logistics assistant: a natural-language chatbot for trucks, container shipments, and loads, with n8n workflows automating operational processes",
      "AI-powered contract search tool: natural-language queries and automatic document summarization via RAG pipelines with LangChain, OpenAI embeddings, and pgvector",
      "Built an AI-driven CV screening platform for HR teams, with Mercado Pago payment integration",
      "REST APIs in Node.js/NestJS and Python for e-commerce platforms (B2C and B2B) and a WhatsApp-integrated training booking system",
      "React/TypeScript dashboards for shipment tracking, bid monitoring, and document search, plus automated lead generation with n8n and web scraping",
      "Resolved a critical production incident caused by uncontrolled table growth (7GB+), tuning Spring Batch jobs and HikariCP connection pooling; implemented Keycloak SSO integrated with Active Directory and optimized Aurora RDS queries",
    ],
  },
  {
    file: "conosurit.sh",
    company: "ConoSurIT",
    roleEs: "Full Stack Web Developer",
    roleEn: "Full Stack Web Developer",
    location: "Córdoba, Argentina · Remote",
    dateEs: "Octubre 2022 – Agosto 2025",
    dateEn: "October 2022 – August 2025",
    descEs: "Desarrollo y mantenimiento de aplicaciones web enterprise orientadas a gestión documental y automatización de flujos, utilizando Angular, Node.js y PostgreSQL.",
    descEn: "Built and maintained enterprise web applications focused on document management and workflow automation, using Angular, Node.js, and PostgreSQL.",
    achievementsLabel: true,
    itemsEs: [
      "Desarrollo y mantenimiento de aplicaciones web enterprise de gestión documental y trámites, para clientes corporativos de Argentina y Chile",
      "Migración de un backend monolítico a una arquitectura de microservicios, mejorando la modularidad y escalabilidad del sistema",
      "Mejora del rendimiento de las aplicaciones en ~40% mediante refactorización de arquitectura de componentes e incorporación de lazy loading",
      "APIs REST e integraciones backend para almacenamiento, recuperación y búsqueda de documentos, incluida una plataforma de búsqueda para una importante institución de seguridad social de Chile",
      "Referente técnico del equipo, coordinando tareas de sprint y revisando decisiones de implementación",
    ],
    itemsEn: [
      "Built and maintained enterprise web applications for document management and workflow processes, for corporate clients in Argentina and Chile",
      "Migrated a monolithic backend to a microservices architecture, increasing system modularity and scalability",
      "Improved application performance by ~40% through component architecture refactoring and lazy loading strategies",
      "Built REST APIs and backend integrations for document storage, retrieval, and search, including a search platform for a major social security institution in Chile",
      "Acted as technical reference for the team, coordinating sprint tasks and reviewing implementation decisions",
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
