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
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='Registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl='https://github.com/FacundoSerna96/gestion-alfa-fitness'
              demoUrl=''
              techList={['Material UI', 'React Router', 'Axios', 'JWT', 'MongoDB']}/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Quiz TKD'
              desc='Juego de preguntas y respuestas para practicantes de Taekwondo'
              gitUrl='https://github.com/FacundoSerna96/QuizTKD'
              demoUrl='https://quiz-tkd.herokuapp.com/'
              techList={['Vanilla Javascript', 'Bootstrap', 'JWT', 'MongoDB']}/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Kiap Tournament'
              desc='Sistema de puntaje para torneos de taekwondo y kickboxing'
              gitUrl='https://github.com/FacundoSerna96/kiapTournament'
              demoUrl=''
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
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
                title='Social Media App'
                desc='Clon de la red social Facebook (con chat)'
                gitUrl='https://github.com/FacundoSerna96/React-Social-Media-App'
                demoUrl=''
                techList={['React.js', 'Socket.io', 'Axios', 'Context API', 'MongoDB']}/>
              <Card 
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
                title='Panel de administracion'
                desc='Dashboard basico con Materia UI'
                gitUrl='https://github.com/FacundoSerna96/React-Admin-Panel'
                demoUrl='https://facundoserna96.github.io/React-Admin-Panel/'
                techList={['React.js', 'Material UI','React Router', 'Sass']}/>
              <Card 
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
                title='Red Social UI'
                desc='Red social usando la libreria de  Material UI'
                gitUrl='https://github.com/FacundoSerna96/react-mui'
                demoUrl='https://facundoserna96.github.io/react-mui/'
                techList={['React.js','Material UI']}/>
              <Card 
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
                title='CRUD with Node js'
                desc='Simple CRUD (Create, Read, Update and Delete) en Node js'
                gitUrl='https://github.com/FacundoSerna96/crud-with-node-js'
                demoUrl=''
                techList={['TypeScript', 'Bootstrap', 'jQuery', 'MVC', 'MySQL']}/>
              <Card 
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
                title='Node Cafe'
                desc='Web Service basado en el curso "Node: De cero a experto" de Fernando Herrera'
                gitUrl='https://github.com/FacundoSerna96/NodeCafe'
                demoUrl=''
                techList={['Node JS','Express', 'MongoDB', 'Mongoose', 'JWT']}/>
              <Card 
                imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
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