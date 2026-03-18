import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsProgressBar.css';

import reactClaro from '../assets/logos/react-logo-claro.png';
import reactOscuro from '../assets/logos/react-logo-oscuro.png';
import nodeClaro from '../assets/logos/node-logo-claro.png';
import nodeOscuro from '../assets/logos/node-logo-oscuro.png';
import iconAws from '../assets/logos/aws-claro.png'
import iconAwsDark from '../assets/logos/aws-oscuro.png'
import iconIa from '../assets/logos/ia-claro.png'
import iconIaDark from '../assets/logos/ia-oscuro.png'

const SkillsProgressBar = () => {
  const { contextSkin, language } = useContext(DataContext)

  const bar = contextSkin ? 'progressBar progressBar-dark' : 'progressBar'
  const detail = contextSkin ? 'skill-detail-dark' : 'skill-detail'

  return (
    <div className='SkillsProgressBar'>

      <div className="icon-skill">
        <img src={contextSkin ? reactOscuro : reactClaro} alt="" />
        <div className={bar}>
          <p>Frontend</p>
          <div className={detail}>
            Angular · React · Next.js · TypeScript · Redux · Tailwind · Material UI
          </div>
        </div>
      </div>

      <div className="icon-skill">
        <img src={contextSkin ? nodeOscuro : nodeClaro} alt="" />
        <div className={bar}>
          <p>Backend</p>
          <div className={detail}>
            Node.js · NestJS · Express · PostgreSQL · Sequelize · JWT
          </div>
        </div>
      </div>

      <div className="icon-skill">
        <img src={contextSkin ? iconAwsDark : iconAws} alt="" />
        <div className={bar}>
          <p>Cloud & DevOps</p>
          <div className={detail}>
            AWS · Docker · Kubernetes · S3 · EC2 · ECS · EKS · Lambda · CI/CD
          </div>
        </div>
      </div>

      <div className="icon-skill">
        <img src={contextSkin ? iconIaDark : iconIa} alt="" />
        <div className={bar}>
          <p>{language ? 'IA' : 'AI'}</p>
          <div className={detail}>
            {language
              ? 'Python · LangGraph · LangChain · RAG · Agentes · Prompt Engineering · Automatización con IA'
              : 'Python · LangGraph · LangChain · RAG · AI Agents · Prompt Engineering · AI Process Automation'
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillsProgressBar
