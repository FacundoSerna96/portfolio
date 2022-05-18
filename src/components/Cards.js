import React from 'react'
import Card from './Card'

import PropTypes from 'prop-types';

import './styles/Cards.css';

const Cards = ({isExp = true}) => {
  return (
    <div className='cards'>
        <div className="cards-exp" style={{display: isExp ? 'grid' : 'none' }}>
          {isExp 
            ? 
            <>
            <Card 
              imgUrl='https://i.ibb.co/HXSqGmV/alfa.png'
              title='Gestión de ventas Alpha'
              desc='Registro y control de ventas, turnos, instructores y alumnos.'
              desc2='hola'
              gitUrl=''
              demoUrl=''
              techList={['Material UI', 'React Router', 'Axios', 'JWT', 'MongoDB']}/>
            <Card 
              imgUrl='https://i.ibb.co/1b85ytn/quiz.png'
              title='Quiz TKD'
              desc='Juego de preguntas y respuestas para practicantes de Taekwondo'
              gitUrl=''
              demoUrl='https://quiz-tkd.herokuapp.com/'
              techList={['Vanilla Javascript', 'Bootstrap', 'JWT', 'MongoDB']}/>
            <Card 
              imgUrl='https://i.ibb.co/S0GvDGS/2022-05-17-06-50-45-lucha-Central.png'
              title='Kiap Tournament'
              desc='Sistema de puntaje para torneos de taekwondo y kickboxing'
              gitUrl=''
              demoUrl='http://raionki.online/'
              techList={['PHP', 'jQuery', 'Bootstrap', 'MySQL']}/>
            </>
            : 
              ''}
        </div>

        <div className="cards-projects" style={{display: isExp ? 'none' : 'grid' }}>
            {isExp 
              ? 
               ''
              : 
               <>
               <Card 
                imgUrl='https://i.ibb.co/Dr69CwM/feisbuk.png'
                title='Social Media App'
                desc='Clon de la red social Facebook (con chat)'
                gitUrl='https://github.com/FacundoSerna96/React-Social-Media-App'
                demoUrl=''
                techList={['React.js', 'Socket.io', 'Axios', 'Context API', 'MongoDB']}/>
              <Card 
                imgUrl='https://i.ibb.co/dDXYKm3/dashboard.png'
                title='Panel de administracion'
                desc='Dashboard basico con Materia UI'
                gitUrl='https://github.com/FacundoSerna96/React-Admin-Panel'
                demoUrl='https://facundoserna96.github.io/React-Admin-Panel/'
                techList={['React.js', 'Material UI','React Router', 'Sass']}/>
              <Card 
                imgUrl='https://i.ibb.co/b5V704s/material-ui.png'
                title='Red Social UI'
                desc='Red social usando la libreria de  Material UI'
                gitUrl='https://github.com/FacundoSerna96/react-mui'
                demoUrl='https://facundoserna96.github.io/react-mui/'
                techList={['React.js','Material UI']}/>
              <Card 
                imgUrl='https://i.ibb.co/02rTrd3/crud-with-node.png'
                title='CRUD with Node js'
                desc='Simple CRUD (Create, Read, Update and Delete) en Node js'
                gitUrl='https://github.com/FacundoSerna96/crud-with-node-js'
                demoUrl=''
                techList={['TypeScript', 'Bootstrap', 'jQuery', 'MVC', 'MySQL']}/>
              <Card 
                imgUrl='https://i.ibb.co/XJ9S26R/cloud-database.webp'
                title='Node Cafe'
                desc='Web Service basado en el curso "Node: De cero a experto" de Fernando Herrera'
                gitUrl='https://github.com/FacundoSerna96/NodeCafe'
                demoUrl=''
                techList={['Node JS','Express', 'MongoDB', 'Mongoose', 'JWT']}/>
              <Card 
                imgUrl='https://i.ibb.co/Wc33Pd4/2022-05-17-07-44-16-Login.png'
                title="Layout's Practice"
                desc='Practicas de maquetacion basados en diseños en Adobe Xd'
                gitUrl='https://github.com/FacundoSerna96/layoutPractice'
                demoUrl='https://github.com/FacundoSerna96/layoutPractice'
                techList={['HTML', 'CSS', 'Javascript', 'Adobe Xd']}/>
               </>}
        </div>
    </div>
  )
}



Cards.propTypes = {
  isExp: PropTypes.bool.isRequired
};


export default Cards