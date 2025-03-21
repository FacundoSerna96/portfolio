import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsIcons.css';

import iconGit from '../assets/skills/claro/git-claro.png';
import iconLinux from '../assets/skills/claro/linux-claro.png';
import iconBootstrap from '../assets/skills/claro/bootstrap-claro.png';
import iconOffice from '../assets/skills/claro/office-claro.png';


import iconGitDark from '../assets/skills/oscuro/git-oscuro.png';
import iconLinuxDark from '../assets/skills/oscuro/linux-oscuro.png';
import iconBootstrapDark from '../assets/skills/oscuro/bootstrap-oscuro.png';
import iconOfficeDark from '../assets/skills/oscuro/office-oscuro.png';



import iconAlfresco from '../assets/skills/claro/alfresco-claro.png'
import iconAlfrescoDark from '../assets/skills/oscuro/alfresco-oscuro.png'
import iconDocker from '../assets/skills/claro/docker-claro.png'
import iconDockerDark from '../assets/skills/oscuro/docker-oscuro.png'
import iconK8s from '../assets/skills/claro/k8s-claro.png'
import iconK8sDark from '../assets/skills/oscuro/k8s-oscuro.png'
import iconPostman from '../assets/skills/claro/postman-claro.png'
import iconPostmanDark from '../assets/skills/oscuro/postman-oscuro.png'
import iconTailwind from '../assets/skills/claro/tailwind-claro.png'
import iconTailwindDark from '../assets/skills/oscuro/tailwind-oscuro.png'
import iconMaterialui from '../assets/skills/claro/materialui-claro.png'
import iconMaterialuiDark from '../assets/skills/oscuro/materialui-oscuro.png'



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
          <img src={contextSkin? iconDockerDark : iconDocker} alt="" />
        </Tooltip>
        <Tooltip title="Kubernetes" placement="top" arrow>
          <img src={contextSkin? iconK8sDark : iconK8s} alt="" />
        </Tooltip>
        <Tooltip title="Postman" placement="top" arrow>
          <img src={contextSkin? iconPostmanDark : iconPostman} alt="" />
        </Tooltip>
        <Tooltip title="Bootstrap" placement="bottom" arrow>
          <img src={contextSkin? iconBootstrapDark : iconBootstrap} alt="" />  
        </Tooltip>
        <Tooltip title="Tailwind" placement="bottom" arrow>
          <img src={contextSkin? iconTailwindDark : iconTailwind} alt="" />
        </Tooltip>
        <Tooltip title="Material UI" placement="bottom" arrow>
          <img src={contextSkin? iconMaterialuiDark : iconMaterialui} alt="" />
        </Tooltip>
        <Tooltip title="Alfresco" placement="bottom" arrow>
          <img src={contextSkin? iconAlfrescoDark : iconAlfresco} alt="" />
        </Tooltip>
        <Tooltip title="Office" placement="bottom" arrow>
          <img src={contextSkin? iconOfficeDark : iconOffice} alt="" />
        </Tooltip>
      </div>
    </div>
  )
}

export default SkillsIcons