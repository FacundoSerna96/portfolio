import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsProgressBar.css';

import ProgressBar from "@ramonak/react-progress-bar";


import jsClaro from '../assets/logos/js-logo-claro.png';
import reactClaro from '../assets/logos/react-logo-claro.png';
import nodeClaro from '../assets/logos/node-logo-claro.png';


import jsOscuro from '../assets/logos/js-logo-oscuro.png';
import reactOscuro from '../assets/logos/react-logo-oscuro.png';
import nodeOscuro from '../assets/logos/node-logo-oscuro.png';

import iconMongo from '../assets/logos/mongo-logo-claro.png';
import iconMongoDark from '../assets/logos/mongo-logo-oscuro.png';

import iconSql from '../assets/logos/sql-logo-claro.png';
import iconSqlDark from '../assets/logos/sql-logo-oscuro.png';


const SkillsProgressBar = () => {
  const {contextSkin} = useContext(DataContext)
  const {language} = useContext(DataContext)

  let progressBar = contextSkin? 'progressBar progressBar-dark' : 'progressBar'
  let bgColor = contextSkin? '#C61A27' : '#641411' ;

  return (
    <div className='SkillsProgressBar'>
      <div className="react icon-skill">
        <img src={contextSkin? reactOscuro : reactClaro} alt="" />
        <div className={progressBar}>
          <p>Angular (12 y 16)</p>
          <div className={contextSkin ? "skill-detail-dark" : "skill-detail"}>
           TypeScript - RxJs - NgRx
          </div>
        </div>
      </div>
      <div className="node icon-skill">
        <img src={contextSkin? nodeOscuro : nodeClaro} alt="" />
        <div className={progressBar}>
          <p>React.JS</p>
          <div className={contextSkin ? "skill-detail-dark" : "skill-detail"}>
          Next.js - Redux - Jest
          </div>
        </div>
      </div>
      <div className="js icon-skill">
        <img src={contextSkin? jsOscuro : jsClaro} alt="" />
        <div className={progressBar}>
          <p>Node</p>
          <div className={contextSkin ? "skill-detail-dark" : "skill-detail"}>
            Nest.JS - Express - Sequalize - JWT
          </div>
        </div>
      </div>
      <div className="sql icon-skill">
        <img src={contextSkin? iconSqlDark : iconSql } alt="" />
        <div className={progressBar}>
          <p>AWS</p>
          <div className={contextSkin ? "skill-detail-dark" : "skill-detail"}>
            S3 - EC2 - EKS
          </div>
        </div>
      </div>
      <div className="mongodb icon-skill">
        <img src={contextSkin? iconMongoDark : iconMongo} alt="" />
        <div className={progressBar}>
          <p>IA</p>
          <div className={contextSkin ? "skill-detail-dark" : "skill-detail"}>
            {
              language 
              ?
                "Integracion con OpenIA Api y ChatBots"
              :
                "Integration with OpenAI API and ChatBots"
            }
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default SkillsProgressBar