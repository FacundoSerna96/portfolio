import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsProgressBar.css';

import ProgressBar from "@ramonak/react-progress-bar";
import htmlClaro from '../assets/logos/html-logo-claro.png';
import cssClaro from '../assets/logos/css-logo-claro.png';
import jsClaro from '../assets/logos/js-logo-claro.png';
import reactClaro from '../assets/logos/react-logo-claro.png';
import nodeClaro from '../assets/logos/node-logo-claro.png';

import htmlOscuro from '../assets/logos/html-logo-oscuro.png';
import cssOscuro from '../assets/logos/css-logo-oscuro.png';
import jsOscuro from '../assets/logos/js-logo-oscuro.png';
import reactOscuro from '../assets/logos/react-logo-oscuro.png';
import nodeOscuro from '../assets/logos/node-logo-oscuro.png';


const SkillsProgressBar = () => {
  const {contextSkin} = useContext(DataContext)

  let progressBar = contextSkin? 'progressBar progressBar-dark' : 'progressBar'
  let bgColor = contextSkin? '#C61A27' : '#641411' ;

  return (
    <div className='SkillsProgressBar'>
      <div className="html icon-skill">
        <img src={contextSkin? htmlOscuro : htmlClaro} alt="" />
        <div className={progressBar}>
          <p>html</p>
          <ProgressBar 
            completed={100} 
            maxCompleted={100} 
            width={"300px"}
            bgColor={bgColor}
            animateOnRender={true}
            labelClassName="label-progress-bar"
            initCompletedOnAnimation={30}
            transitionDuration={'2s'}/>
        </div>
      </div>
      <div className="css icon-skill">
        <img src={contextSkin? cssOscuro : cssClaro} alt="" />
        <div className={progressBar}>
          <p>css</p>
          <ProgressBar 
            completed={80} 
            maxCompleted={100} 
            width={"300px"}
            bgColor={bgColor}
            animateOnRender={true}
            labelClassName="label-progress-bar"
            initCompletedOnAnimation={30}
            transitionDuration={'2s'}/>
        </div>
      </div>
      <div className="js icon-skill">
        <img src={contextSkin? jsOscuro : jsClaro} alt="" />
        <div className={progressBar}>
          <p>javascript</p>
          <ProgressBar 
            completed={70} 
            maxCompleted={100} 
            width={"300px"}
            bgColor={bgColor}
            animateOnRender={true}
            labelClassName="label-progress-bar"
            initCompletedOnAnimation={30}
            transitionDuration={'2s'}/>
        </div>
      </div>
      <div className="react icon-skill">
        <img src={contextSkin? reactOscuro : reactClaro} alt="" />
        <div className={progressBar}>
          <p>react js</p>
          <ProgressBar 
            completed={60} 
            maxCompleted={100} 
            width={"300px"}
            bgColor={bgColor}
            animateOnRender={true}
            labelClassName="label-progress-bar"
            initCompletedOnAnimation={30}
            transitionDuration={'2s'}/>
        </div>
      </div>
      <div className="node icon-skill">
        <img src={contextSkin? nodeOscuro : nodeClaro} alt="" />
        <div className={progressBar}>
          <p>node js</p>
          <ProgressBar 
            completed={60} 
            maxCompleted={100} 
            width={"300px"}
            bgColor={bgColor}
            animateOnRender={true}
            labelClassName="label-progress-bar"
            initCompletedOnAnimation={30}
            transitionDuration={'2s'}/>
        </div>
      </div>
    </div>
  )
}

export default SkillsProgressBar