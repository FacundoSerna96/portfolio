import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/Experience.css';

import Cards from './Cards';

function Experience() {

  const {contextSkin} = useContext(DataContext)

  return (
    <div className={contextSkin? 'experience experience-dark' : 'experience'} id='experience'>
      <div className="title">
        <h1>Experience</h1>
      </div>

      <Cards isExp={true}/>

      <div className="title" >
        <h1>Proyectos Personales</h1>
      </div>

      <Cards isExp={false}/>
    </div>
  )
}

export default Experience