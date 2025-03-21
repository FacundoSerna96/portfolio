import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsIcons.css';

import iconMongo from '../assets/skills/claro/mongo-claro.png';
import iconGit from '../assets/skills/claro/git-claro.png';
import iconLinux from '../assets/skills/claro/linux-claro.png';
import iconBootstrap from '../assets/skills/claro/bootstrap-claro.png';
import iconOffice from '../assets/skills/claro/office-claro.png';
import iconExpress from '../assets/skills/claro/express-claro.png';
import iconTs from '../assets/skills/claro/ts-claro.png';
import iconAndroid from '../assets/skills/claro/android-claro.png';
import iconC from '../assets/skills/claro/c-claro.png';

import iconMongoDark from '../assets/skills/oscuro/mongo-oscuro.png';
import iconGitDark from '../assets/skills/oscuro/git-oscuro.png';
import iconLinuxDark from '../assets/skills/oscuro/linux-oscuro.png';
import iconBootstrapDark from '../assets/skills/oscuro/bootstrap-oscuro.png';
import iconOfficeDark from '../assets/skills/oscuro/office-oscuro.png';
import iconExpressDark from '../assets/skills/oscuro/express-oscuro.png';
import iconTsDark from '../assets/skills/oscuro/ts-oscuro.png';
import iconAndroidDark from '../assets/skills/oscuro/android-oscuro.png';
import iconCDark from '../assets/skills/oscuro/c-oscuro.png';

import iconHtml from '../assets/skills/claro/html-claro.png';
import iconCss from '../assets/skills/claro/css-claro.png';
import iconHtmlDark from '../assets/skills/oscuro/html-oscuro.png';
import iconCssDark from '../assets/skills/oscuro/css-oscuro.png';


import Tooltip from '@mui/material/Tooltip';

const SkillsIcons = () => {

  const {contextSkin} = useContext(DataContext)
  const {language} = useContext(DataContext)
  

  return (
    <div className='SkillsIcons'>
      <div className={contextSkin? 'title-skills title-skills-dark' : 'title-skills'}>
        {
          language 
          ?
          <p>Otras habilidades</p>
          :
          <p>Other Skills</p>
        }
      </div>
      <div className="icon-skills">
        <Tooltip title="Git" placement="top" arrow>
          <img src={contextSkin? iconGitDark : iconGit} alt="" />
        </Tooltip>
        <Tooltip title="Linux" placement="top" arrow>
          <img src={contextSkin? iconLinuxDark : iconLinux} alt="" />
        </Tooltip>
        <Tooltip title="Docker" placement="top" arrow>
          <img src={contextSkin? iconHtmlDark : iconHtml} alt="" />
        </Tooltip>
        <Tooltip title="Kubernetes" placement="top" arrow>
          <img src={contextSkin? iconCssDark : iconCss} alt="" />
        </Tooltip>
        <Tooltip title="Alfresco" placement="top" arrow>
          <img src={contextSkin? iconBootstrapDark : iconBootstrap} alt="" />  
        </Tooltip>
        <Tooltip title="MySQL" placement="bottom" arrow>
          <img src={contextSkin? iconTsDark : iconTs} alt="" />
        </Tooltip>
        <Tooltip title="Postgres" placement="bottom" arrow>
          <img src={contextSkin? iconExpressDark : iconExpress} alt="" />
        </Tooltip>
        <Tooltip title="Bootstrap" placement="bottom" arrow>
          <img src={contextSkin? iconAndroidDark : iconAndroid} alt="" />
        </Tooltip>
        <Tooltip title="Tailwind" placement="bottom" arrow>
          <img src={contextSkin? iconCDark : iconC} alt="" />
        </Tooltip>
        <Tooltip title="Figma" placement="bottom" arrow>
          <img src={contextSkin? iconOfficeDark : iconOffice} alt="" />
        </Tooltip>
      </div>
    </div>
  )
}

export default SkillsIcons