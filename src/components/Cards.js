import React from 'react'
import Card from './Card'

import PropTypes from 'prop-types';

import './styles/Cards.css';



const Cards = ({isExp = true}) => {
  return (
    <div className='cards'>
        <div className="cards-exp" style={{display: isExp ? 'grid' : 'none' }}>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Gestión de ventas Alpha'
            desc='Registro y control de ventas, turnos, instructores y alumnos.'
            gitUrl='https://github.com/FacundoSerna96/gestion-alfa-fitness'
            demoUrl=''/>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Quiz TKD'
            desc='Juego de preguntas y respuestas para practicantes de Taekwondo'
            gitUrl='https://github.com/FacundoSerna96/QuizTKD'
            demoUrl=''/>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Kiap Tournament'
            desc='Sistema de puntaje para torneos de taekwondo y kickboxing'
            gitUrl='https://github.com/FacundoSerna96/kiapTournament'
            demoUrl=''/>
        </div>

        <div className="cards-projects" style={{display: isExp ? 'none' : 'grid' }}>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Social Media App'
              desc='Clon de la red social Facebook'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Panel de administracion'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Red Social UI'
              desc='Red social usando la libreria de  Material UI'
              gitUrl=''
              demoUrl=''/>
              <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='CRUD with Node js'
              desc='Simple CRUD (Create, Read, Update and Delete) en Node js'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Node Cafe'
              desc='Web Service basado en el curso "Node: De cero a experto" de Fernando Herrera'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title="Layout's Practice"
              desc='Practicas de maquetacion basados en diseños en Adobe Xd'
              gitUrl=''
              demoUrl=''/>
        </div>
    </div>
  )
}



Cards.propTypes = {
  isExp: PropTypes.bool.isRequired
};


export default Cards