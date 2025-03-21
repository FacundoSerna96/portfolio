import React, { useContext, useRef } from 'react'

import SkillProgressBar from './SkillsProgressBar';
import SkillsIcons from './SkillsIcons';
import './styles/Skills.css';

import 'animate.css';
import useOnScreen from '../Hooks/useOnScreen'

import Desktop from '../assets/desktop-claro.png';
import DesktopDark from '../assets/desktop-oscuro.png'

import { DataContext } from '../Helpers/Context';

const Skills = () => {
  const {contextSkin} = useContext(DataContext)
  const {language} = useContext(DataContext)

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div className={'skills'} id='skills'>
      <div className={contextSkin? 'desktop desktop-dark' : 'desktop'}>
        {
          language
          ?
          <h1>Habilidades</h1>
          :
          <h1>Skills</h1>
        }
        <img src={contextSkin? DesktopDark : Desktop} alt="" />
      </div>

      <div ref={ref}  className={isVisible? 'skill-components animate__animated animate__fadeIn' : 'displayHidden'}>
        {isVisible? <SkillProgressBar />: ''}
        <SkillsIcons />
      </div>
    </div>
  )
}

export default Skills